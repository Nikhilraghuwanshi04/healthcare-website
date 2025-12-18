'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { GsapBackground } from '@/components/ui/gsap-background'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerUser, resetRegistrationSuccess } from '@/lib/store/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import Image from 'next/image'
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
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative p-4 overflow-hidden bg-slate-900">
            {/* Background Animation */}
            <GsapBackground className="z-0" />

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Logo */}
                <div className="mb-8 w-full px-4 flex justify-center">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={500}
                        height={140}
                        className="w-auto h-24 sm:h-32 md:h-40 object-contain"
                        priority
                    />
                </div>

                <Card className="w-full max-w-[400px] border-none shadow-2xl bg-white/95 backdrop-blur-md">
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

                <div className="mt-8 text-center space-y-4">
                    <div className="text-sm text-slate-400">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-[#38BDF8] hover:text-[#0EA5E9] transition-colors">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function RegisterPage() {
    return (
        <RegisterForm />
    )
}
