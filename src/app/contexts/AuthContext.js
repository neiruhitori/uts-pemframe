'use client'

import { createContext, useContext, useState } from 'react'
import axios from '@/lib/axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

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
            const response = await axios.post('/register', {
                name,
                email,
                password,
                password_confirmation,
            })
            setStatus('Registration successful')
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
            value={{ user, login, register, logout, errors, status }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
