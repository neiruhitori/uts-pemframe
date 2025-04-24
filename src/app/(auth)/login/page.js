'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../contexts/AuthContext'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import Label from '@/components/Label'
import Button from '@/components/Button'
import Input from '@/components/Input'
// import InputError from '@/components/InputError'

export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)
    const [status, setStatus] = useState(null);


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await login({ email, password })
            router.push('/dashboard') // Redirect setelah login
        } catch (error) {
            setErrors('Login gagal. Periksa email dan password.')
        }
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={handleSubmit}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    {/* <InputError messages={errors.email} className="mt-2" /> */}
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    {/* <InputError messages={errors.password} className="mt-2" /> */}
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-3">Login</Button>
                </div>
            </form>
        </>
    )
}
