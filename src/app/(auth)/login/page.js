'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Label } from '../../../components/Label'
import InputError from '../../../components/InputError'
import { useAuthContext } from '../../contexts/AuthContext'

export default function LoginPage() {
    const { login, errors, status, setStatus } = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault()
        const success = await login({ email, password })
        if (success) {
            router.push('/dashboard')
        }
    }

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus(null)
            }, 3000) // Reset status setelah 3 detik
            return () => clearTimeout(timer)
        }
    }, [status, setStatus])

    return (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Login</h2>
            <p className="text-sm text-muted-foreground mb-6">
                Enter your email and password to access your account.
            </p>
            
            {/* Notifikasi sukses registrasi */}
            {status && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {status}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                    />
                    <InputError messages={errors.email} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder="********"
                    />
                    <InputError messages={errors.password} />
                </div>

                <div className="flex justify-between items-center">
                    <Link href="/register" className="text-sm underline">
                        Don't have an account?
                    </Link>
                </div>

                <Button type="submit" className="w-full" variant="outline" size="sm">
                    Login
                </Button>
            </form>
        </div>
    )
}
