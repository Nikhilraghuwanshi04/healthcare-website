import { ENDPOINTS } from '@/constants/endpoints'
import { AuthResponse } from './types'

export const authApi = {
    login: async (email: string, password: string): Promise<AuthResponse> => {
        const response = await fetch(ENDPOINTS.AUTH.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Login failed')
        }

        return data
    },

    register: async (name: string, email: string, password: string, role: string = 'patient'): Promise<AuthResponse> => {
        const response = await fetch(ENDPOINTS.AUTH.REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, role }),
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Registration failed')
        }

        return data
    }
}
