import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZURI | Wake Up. Be Bold.',
  description: 'Premium Tanzanian single-origin coffee for the bold.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zuri-black text-white font-apple antialiased relative overflow-x-hidden">
        <div className="aurora-layer animate-aurora" aria-hidden="true" />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
