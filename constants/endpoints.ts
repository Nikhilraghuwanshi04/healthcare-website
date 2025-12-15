export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/login`,
        REGISTER: `${API_BASE_URL}/register`,
    }
} as const
