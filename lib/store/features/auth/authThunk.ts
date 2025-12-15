import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from './authApi';

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const data = await authApi.login(email, password)

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

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password, role = 'patient' }: { name: string; email: string; password: string; role?: string }, { rejectWithValue }) => {
        try {
            const data = await authApi.register(name, email, password, role)

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

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        // Clear local storage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        // Return nothing, the fulfilled action will trigger state cleanup in the slice
        return
    }
)
