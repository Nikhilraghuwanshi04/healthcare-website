import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Physiotherapy',
  description: 'Physiotherapy',
  generator: 'v0.dev',
}

import StoreProvider from '@/lib/store/StoreProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
