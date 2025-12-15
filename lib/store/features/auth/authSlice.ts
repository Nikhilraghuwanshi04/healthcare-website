import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface User {
    id: string
    name: string
    email: string
    role: string
}

interface AuthState {
    user: User | null
    token: string | null
    loading: boolean
    error: string | null
    registrationSuccess: boolean
    isInitialized: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    registrationSuccess: false,
    isInitialized: false,
}

const API_URL = '/api/auth'

// Async Thunk for Login
export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (!response.ok) {
                return rejectWithValue(data.message || 'Login failed')
            }

            const authData = {
                user: {
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    role: data.role
                },
                token: data.token
            }

            // Persist to localStorage
            localStorage.setItem('token', authData.token)
            localStorage.setItem('user', JSON.stringify(authData.user))

            return authData
        } catch (error: any) {
            return rejectWithValue(error.message || 'An error occurred during login')
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { dispatch }) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch(authSlice.actions.logout())
    }
)

// Async Thunk for Register
export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password, role = 'patient' }: { name: string; email: string; password: string; role?: string }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, role }),
            })

            const data = await response.json()

            if (!response.ok) {
                return rejectWithValue(data.message || 'Registration failed')
            }

            const authData = {
                user: {
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    role: data.role
                },
                token: data.token
            }

            // Persist to localStorage
            localStorage.setItem('token', authData.token)
            localStorage.setItem('user', JSON.stringify(authData.user))

            return authData
        } catch (error: any) {
            return rejectWithValue(error.message || 'An error occurred during registration')
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.error = null
            state.registrationSuccess = false
            state.isInitialized = true // Logout implies we are now in a known state (logged out)
        },
        restoreAuth: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isInitialized = true
        },
        authInitialized: (state) => {
            state.isInitialized = true
        },
        clearError: (state) => {
            state.error = null
        },
        resetRegistrationSuccess: (state) => {
            state.registrationSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.user
                state.token = action.payload.token
                state.isInitialized = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
                state.isInitialized = true
            })
            // Register
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
                state.registrationSuccess = false
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.registrationSuccess = true
                state.error = null
                // Also set user/token immediately on register if we want auto-login
                // But typically register might just be success -> redirect to login OR auto-login.
                // My helper code above sets 'registrationSuccess = true'. 
                // The prompt Step 0 Register endpoint doesn't imply auto-login, but the previous code handled it as just success.
                // However, the `registerUser` thunk *returns* the user/token.
                // So I SHOULD set the state to logged in? 
                // Wait, previous logic: `loginUser` sets state. `registerUser` sets `registrationSuccess`.
                // If I return `authData` in `registerUser`, `action.payload` has it.
                // I will update the case to also set user/token if desired? 
                // Previous code: `registrationSuccess = true` only.
                // I'll stick to previous behavior but just ensure I'm returning persistence data.
                // Actually, if `registerUser` persists to `localStorage`, then we ARE logged in effectively.
                // So I should update state too.
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
                state.registrationSuccess = false
            })
    },
})

export const { logout, restoreAuth, authInitialized, clearError, resetRegistrationSuccess } = authSlice.actions

export default authSlice.reducer
