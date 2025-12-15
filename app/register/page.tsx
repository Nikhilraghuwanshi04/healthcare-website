'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerUser, resetRegistrationSuccess } from '@/lib/store/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { Zap } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const router = useRouter()
    const { loading, error, registrationSuccess, user, isInitialized } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (!isInitialized) return

        // If already logged in and NOT just registered, redirect
        if (user && !registrationSuccess) {
            const role = user.role?.toLowerCase()
            if (role === 'admin') {
                router.push('/admin/dashboard')
            } else if (role === 'patient') {
                router.push('/patient/dashboard')
            } else {
                router.push('/')
            }
        }

        if (registrationSuccess) {
            // ... (keep existing logic)
            // Adding a small delay or just redirecting immediately
            // Optionally could show a success message before redirect
            const timeout = setTimeout(() => {
                dispatch(resetRegistrationSuccess())
                router.push('/login')
            }, 1500)
            return () => clearTimeout(timeout)
        }
    }, [user, registrationSuccess, isInitialized, router, dispatch])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await dispatch(registerUser({ name, email, password }))
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FAFAFA] p-4">
            {/* Logo */}
            <div className="mb-8 p-3 rounded-xl bg-[#38BDF8] shadow-lg shadow-sky-100">
                <Zap className="w-8 h-8 text-white fill-white" />
            </div>

            <Card className="w-full max-w-[400px] border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white">
                <CardHeader className="space-y-1 flex flex-col items-center pb-2 pt-8">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Create an Account</h1>
                    <p className="text-sm text-slate-500 text-center max-w-[280px]">
                        Enter your details to create your account.
                    </p>
                </CardHeader>
                <CardContent className="space-y-6 pt-6 px-8 pb-8">
                    {registrationSuccess ? (
                        <div className="text-center p-4">
                            <p className="text-green-600 font-medium">Registration successful! Redirecting to login...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-semibold text-slate-900">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    className="h-11 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#38BDF8] focus-visible:border-[#38BDF8]"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-semibold text-slate-900">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    className="h-11 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#38BDF8] focus-visible:border-[#38BDF8]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-semibold text-slate-900">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    className="h-11 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#38BDF8] focus-visible:border-[#38BDF8]"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-sm text-red-500 font-medium text-center">{error}</p>}
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-11 bg-[#38BDF8] hover:bg-[#0EA5E9] text-white font-semibold text-base shadow-none transition-all duration-200"
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>

            <div className="mt-8 text-center">
                <p className="text-sm text-slate-600">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-[#38BDF8] hover:text-[#0EA5E9] transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default function RegisterPage() {
    return (
        <RegisterForm />
    )
}
