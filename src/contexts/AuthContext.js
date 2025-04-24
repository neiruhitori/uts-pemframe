// src/contexts/AuthContext.js
'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import axios from '../lib/axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/user')
            setUser(data)
        } catch (err) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const login = async credentials => {
        await csrf()
        await axios.post('/login', credentials)
        await getUser()
    }

    const register = async data => {
        await csrf()
        await axios.post('/register', data)
        await getUser()
    }

    const logout = async () => {
        await axios.post('/logout')
        setUser(null)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
