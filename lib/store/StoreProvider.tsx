'use client'

import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { authInitialized, restoreAuth } from './features/auth/authSlice'
import { AppStore, makeStore } from './store'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    useEffect(() => {
        if (storeRef.current) {
            const token = localStorage.getItem('token')
            const userStr = localStorage.getItem('user')

            if (token && userStr) {
                try {
                    const user = JSON.parse(userStr)
                    storeRef.current.dispatch(restoreAuth({ user, token }))
                } catch (e) {
                    console.error('Failed to parse user from storage', e)
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    storeRef.current.dispatch(authInitialized())
                }
            } else {
                storeRef.current.dispatch(authInitialized())
            }
        }
    }, [])

    return <Provider store={storeRef.current}>{children}</Provider>
}
