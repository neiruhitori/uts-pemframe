'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuthContext } from '../../contexts/AuthContext'
import { useState } from 'react'

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
            <form onSubmit={submitForm}>
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        className="w-full"
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        autoFocus
                    />
                    <InputError messages={errors.name} />
                </div>

                <div className="mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className="w-full"
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
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

                <div className="mt-4">
                    <Label htmlFor="passwordConfirmation">
                        Confirm Password
                    </Label>
                    <Input
                        className="w-full"
                        id="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        required
                    />
                    <InputError messages={errors.password_confirmation} />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href="/login"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>
                    <Button type="submit" className="ml-4">
                        Register
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Register
