'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

interface Props {
    className?: string
}

export const GsapBackground = ({ className }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useGSAP(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = container.offsetWidth
        let height = container.offsetHeight

        const resize = () => {
            width = container.offsetWidth
            height = container.offsetHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener('resize', resize)
        resize()

        // Configuration
        const particleCount = 60
        const connectionDistance = 150
        const mouseDistance = 200

        // Particle System
        const particles: Array<{
            x: number
            y: number
            vx: number
            vy: number
            size: number
            color: string
        }> = []

        const colors = ['#0284c7', '#0ea5e9', '#38bdf8'] // Sky-600, Sky-500, Sky-400

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                size: Math.random() * 2 + 1,
                color: colors[Math.floor(Math.random() * colors.length)]
            })
        }

        let mouseX = 0
        let mouseY = 0

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseX = e.clientX - rect.left
            mouseY = e.clientY - rect.top
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Animation Loop
        const render = () => {
            ctx.clearRect(0, 0, width, height)

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce off walls
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Mouse interaction
                const dx = mouseX - p.x
                const dy = mouseY - p.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < mouseDistance) {
                    const angle = Math.atan2(dy, dx)
                    const force = (mouseDistance - dist) / mouseDistance
                    p.vx -= Math.cos(angle) * force * 0.05
                    p.vy -= Math.sin(angle) * force * 0.05
                }

                // Draw Particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.globalAlpha = 0.6
                ctx.fill()

                // Connect particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const pdx = p.x - p2.x
                    const pdy = p.y - p2.y
                    const pDist = Math.sqrt(pdx * pdx + pdy * pdy)

                    if (pDist < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = p.color
                        ctx.globalAlpha = (1 - pDist / connectionDistance) * 0.4
                        ctx.lineWidth = 0.5
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            requestAnimationFrame(render)
        }

        const animationId = requestAnimationFrame(render)

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationId)
        }
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={cn("absolute inset-0 bg-[#F8FAFC]", className)}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent)]" />
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
            />
        </div>
    )
}
