import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Physiotherapy',
  description: 'Revitalize Your Health, Rediscover Movement',
  generator: 'v0.dev',
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#38BDF8",
};

import ServerWakeup from '@/components/ServerWakeup';
import StoreProvider from '@/lib/store/StoreProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ServerWakeup />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
