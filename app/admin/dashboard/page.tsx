'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { logoutUser } from '@/lib/store/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminDashboard() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const { user, isInitialized } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (!isInitialized) return

        if (!user) {
            router.push('/login')
        } else if (user.role?.toLowerCase() !== 'admin') {
            router.push('/') // or unauthorized page
        }
    }, [user, isInitialized, router])

    const handleLogout = () => {
        dispatch(logoutUser())
        router.push('/login')
    }

    if (!isInitialized || !user) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
                    <p className="text-slate-500">Welcome back, {user.name}</p>
                </div>
                <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Logout
                </Button>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                        <User className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                </Card>
                {/* Add more admin specific cards here */}
            </div>
        </div>
    )
}
