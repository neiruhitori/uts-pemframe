'use client'
// components/RoleGuard.js
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function RoleGuard({ children, allowedRoles }) {
    const { user, isLoading } = useAuth({ middleware: 'auth' })
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && user) {
            router.push('/dashboard')
        }
    }, [user, isLoading, router])    

    // Tampilkan loading state atau null jika masih loading atau user tidak memiliki role yang diizinkan
    if (isLoading || !user || !allowedRoles.includes(user.role)) {
        return null // Atau komponen loading
    }

    // Render children jika user memiliki role yang diizinkan
    return <>{children}</>
}
