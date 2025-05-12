import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VoltEdge - Next-Gen Noise-Canceling Headphones',
  description: 'Experience crystal-clear sound with cutting-edge noise cancellation technology. Introducing VoltEdge - where innovation meets immersive audio.',
  keywords: 'headphones, noise-canceling, tech, audio, premium sound, VoltEdge',
  openGraph: {
    title: 'VoltEdge - Next-Gen Noise-Canceling Headphones',
    description: 'Experience crystal-clear sound with cutting-edge noise cancellation technology.',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
