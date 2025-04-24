'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuthContext } from '../../contexts/AuthContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const { login, errors } = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const submitForm = async event => {
        event.preventDefault()
        const success = await login({ email, password })
        if (success) {
            router.push('/dashboard')
        }
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className="w-full"
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        autoFocus
                    />
                    <InputError messages={errors.email} />
                </div>

                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        className="w-full"
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <InputError messages={errors.password} />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href="/register"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        Don't have account yet?
                    </Link>
                    <Button type="submit" className="ml-3">
                        Login
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Login
