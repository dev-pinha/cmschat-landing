import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cmschat.ai | The client portal that actually works',
  description: 'Your clients chat. Your site updates. You stay in control. AI-powered content management for web agencies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#07130F] text-zinc-100 flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
