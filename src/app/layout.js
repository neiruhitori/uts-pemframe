import { Nunito } from 'next/font/google'
import '@/app/global.css'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/tripnesia-logo.svg" sizes="any" />
            </head>
            <body
                className={`${nunitoFont.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: "Tripnesia | Explore the Wonders of Indonesia",
    description:
      "Discover breathtaking destinations across Indonesia with Tripnesia. We offer curated travel experiences, tour packages, and expert guides to make your journey unforgettable.",
  };

export default RootLayout
