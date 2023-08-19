import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Livingstone Academy',
  description: "Learning that gets you skills for your present and your future. Get stated with us. created by experts, here LIVINGSTONE Academy's libary of trusted practice and lessons covers math, sciene, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
