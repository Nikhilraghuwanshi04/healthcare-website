export interface User {
    id: string
    name: string
    email: string
    role: string
}

export interface AuthState {
    user: User | null
    token: string | null
    loading: boolean
    error: string | null
    registrationSuccess: boolean
    isInitialized: boolean
}

export interface AuthResponse {
    _id: string
    name: string
    email: string
    role: string
    token: string
    message?: string
}
