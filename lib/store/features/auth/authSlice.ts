import { createSlice } from '@reduxjs/toolkit'
import { loginUser, logoutUser, registerUser } from './authThunk'
import { AuthState } from './types'

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    registrationSuccess: false,
    isInitialized: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
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
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
                state.registrationSuccess = false
            })
            // Logout (Handled here to avoid circular dependency)
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.token = null
                state.error = null
                state.registrationSuccess = false
                state.isInitialized = true
            })
    },
})

export const { restoreAuth, authInitialized, clearError, resetRegistrationSuccess } = authSlice.actions

// Re-export thunks for easier access from components
export { loginUser, logoutUser, registerUser }

export default authSlice.reducer
