import Link from 'next/link'
import AuthCard from './AuthCard'
// import ApplicationLogo from '@/components/ApplicationLogo'
import { TicketsPlane } from 'lucide-react'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <p className="text-2xl font-bold text-[#205781] flex items-center">
                            <TicketsPlane className="pr-1 size-9" />
                            Trip
                            <span className="text-[#f3bb66]">nesia</span>
                        </p>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
