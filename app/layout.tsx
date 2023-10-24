import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/MainLayout'
import MenuContextProvider from '@/content/MenuContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffe Cashier Rofiq',
  description: 'Ini Halaman Cashier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  )
}
