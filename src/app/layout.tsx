import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ads Astra | Astronomical Brand Reach',
  description: 'Revolutionizing advertising by launching constellations of satellites that form your brand\'s logo in the night sky.',
  keywords: 'space advertising, satellite advertising, brand constellation, orbital marketing, night sky advertising',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 