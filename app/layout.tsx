import type { Metadata, Viewport } from 'next'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'ZURI | Wake Up. Be Bold.',
  description: 'Premium Tanzanian single-origin coffee for the bold.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zuri-black text-white font-apple antialiased relative overflow-x-hidden">
        <ScrollToTop />
        <div className="aurora-layer animate-aurora" aria-hidden="true" />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
