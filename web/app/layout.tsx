import type { Metadata } from 'next'
import { inter } from './utils/font'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Photo Wake',
  description: 'avator generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='h-full' suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased h-full bg-white dark:bg-zinc-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
