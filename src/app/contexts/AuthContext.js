'use client'

import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation' // Import useRouter
import axios from '../../lib/axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const router = useRouter() // Inisialisasi router

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({ email, password }) => {
        await csrf()
        setErrors([])

        try {
            const response = await axios.post('/login', { email, password })
            setUser(response.data.user)
            return true // Login berhasil
        } catch (error) {
            setErrors(error.response?.data?.errors || ['Login failed'])
            return false // Login gagal
        }
    }

    const register = async ({
        name,
        email,
        password,
        password_confirmation,
    }) => {
        await csrf()
        setErrors([])

        try {
            await axios.post('/register', {
                name,
                email,
                password,
                password_confirmation,
            })
            setStatus('Registration successful')
            router.push('/login') // Redirect ke login setelah berhasil register
        } catch (error) {
            setErrors(error.response?.data?.errors || ['Registration failed'])
        }
    }

    const logout = async () => {
        try {
            await axios.post('/logout')
            setUser(null)
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, login, register, logout, errors, status, setStatus }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
