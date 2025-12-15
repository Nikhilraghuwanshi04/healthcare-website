import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
            <h1 className="text-4xl font-bold mb-8 text-slate-900">Physiotherapy Website</h1>
            <p className="text-xl mb-8 text-slate-600">Welcome to our platform.</p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/register">Register</Link>
                </Button>
            </div>
        </div>
    )
}
