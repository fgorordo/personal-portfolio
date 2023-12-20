import { Inter, Lato } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'
import { Footer, Navbar } from '@/components'

const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-background text-text'>
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
