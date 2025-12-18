'use client'

import { ENDPOINTS } from '@/constants/endpoints'
import { useEffect } from 'react'

export const useServerWakeup = () => {
    useEffect(() => {
        const wakeUpServer = async () => {
            try {
                await fetch(ENDPOINTS.AUTH.LOGIN, {
                    method: 'OPTIONS',
                    mode: 'no-cors'
                })

                console.log('Server wake-up signal sent.')
            } catch (error) {

                console.log('Server wake-up signal failed (expected if server is down or network issue).')
            }
        }

        wakeUpServer()
    }, [])
}
