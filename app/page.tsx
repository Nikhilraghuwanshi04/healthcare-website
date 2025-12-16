'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Activity, Brain, ChevronDown, ShieldCheck, Stethoscope } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const services = [
        {
            icon: <Activity className="w-8 h-8 text-[#38BDF8]" />,
            title: "Manual Therapy",
            description: "Hands-on techniques to mobilize joints and soft tissues."
        },
        {
            icon: <Brain className="w-8 h-8 text-[#38BDF8]" />,
            title: "Neurological Rehab",
            description: "Specialized care for stroke, spinal cord injuries, and more."
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-[#38BDF8]" />,
            title: "Sports Injury",
            description: "Customized recovery plans for athletes to return to sport."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#38BDF8]" />,
            title: "Post-Op Care",
            description: "Comprehensive rehabilitation after surgical procedures."
        }
    ]

    return (
        <main className="min-h-screen relative font-sans">
            {/* Navbar */}
            <nav className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 py-2 px-6 md:px-12 flex items-center justify-between",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50" : "bg-transparent"
            )}>
                <div className="flex items-center gap-2">
                    <div className="relative w-48 h-20">
                        <Image
                            src="/assets/healthcare.png"
                            alt="Physio Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className={cn("hidden md:flex font-medium", scrolled ? "text-slate-600 hover:text-[#38BDF8]" : "text-white hover:text-[#38BDF8]")} asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white rounded-full px-6 font-semibold shadow-lg shadow-sky-500/20" asChild>
                        <Link href="/register">Book Now</Link>
                    </Button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/healthcareimage.webp"
                        alt="Physiotherapy Session"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent z-10" />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
                            <span className="text-xs font-semibold text-[#38BDF8] tracking-wide uppercase">Premier Care</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                            Revitalize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#BAE6FD]">Health</span>,<br />
                            Rediscover Movement
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                            Experience expert physiotherapy care tailored to your needs. We help you recover, strengthen, and live pain-free with advanced rehabilitation techniques.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-sky-500/20 transition-all hover:scale-105" asChild>
                                <Link href="/register">Get Started Today</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-black hover:bg-white/10 hover:text-white dark:hover:bg-white/10 backdrop-blur-sm transition-all" asChild>
                                <Link href="#services">Our Services</Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">15k+</span>
                                <span className="text-sm text-slate-400">Happy Patients</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">12+</span>
                                <span className="text-sm text-slate-400">Years Experience</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">100%</span>
                                <span className="text-sm text-slate-400">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
                    <ChevronDown className="w-10 h-10 text-white/80" />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Our Specialized Services</h2>
                        <p className="text-slate-600 text-lg">Comprehensive care designed to help you recover faster and stay stronger.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-8 space-y-4 flex flex-col items-center text-center">
                                    <div className="p-4 rounded-full bg-sky-50 mb-2">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="bg-slate-900 rounded-3xl p-12 md:p-24 relative overflow-hidden text-center">
                        {/* Background blobs */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Start Your Recovery?</h2>
                            <p className="text-slate-300 text-lg">Book your appointment today and take the first step towards a pain-free life.</p>
                            <Button size="lg" className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white h-14 px-10 text-lg rounded-full shadow-lg" asChild>
                                <Link href="/register">Book Appointment Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
