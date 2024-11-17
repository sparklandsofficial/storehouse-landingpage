import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation'
import Footer from './components/footer'
import FacebookPixel from './components/FacebookPixel'
import GoogleTrack from './components/GoogleTrack'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '星域智空間 | 您的收納小管家',
  description: '星域智空間，您的收納小管家',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head />
      <body className={inter.className}>
        <FacebookPixel />
        <GoogleTrack />
        <Navigation />
        <main className='mt-[70px] relative max-w-[100vw] overflow-x-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
