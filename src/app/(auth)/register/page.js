'use client'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Label } from '../../../components/Label'
import Link from 'next/link'
import { useAuthContext } from '../../contexts/AuthContext'
import { useState } from 'react'

const InputError = ({ messages }) => {
    if (!messages) return null
    return (
        <div className="text-sm text-red-500 mt-1">
            {Array.isArray(messages) ? messages.join(', ') : messages}
        </div>
    )
}

const Register = () => {
    const { register, errors, status } = useAuthContext()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const submitForm = async event => {
        event.preventDefault()
        await register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
        })
    }

    return (
        <>
            {status && <div className="mb-4 text-green-600">{status}</div>}

            <form onSubmit={submitForm} className="space-y-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        autoFocus
                    />
                    <InputError messages={errors.name} />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <InputError messages={errors.email} />
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <InputError messages={errors.password} />
                </div>

                <div>
                    <Label htmlFor="passwordConfirmation">
                        Confirm Password
                    </Label>
                    <Input
                        id="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        required
                    />
                    <InputError messages={errors.password_confirmation} />
                </div>

                <div className="flex items-center justify-end">
                    <Link
                        href="/login"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>
                    <Button type="submit" className="ml-4" variant="outline" size="sm">
                        Register
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Register
