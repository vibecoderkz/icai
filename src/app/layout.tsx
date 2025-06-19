import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Форум в Астане • 28 июня 2025',
  description: 'ИИ — новая грамотность. Первая ИИ-конференция в Астане. Спикеры, воркшопы, нетворкинг.',
  keywords: 'AI, ИИ, конференция, Астана, искусственный интеллект, форум, 2025',
  openGraph: {
    title: 'AI-Форум в Астане • 28 июня 2025',
    description: 'ИИ — новая грамотность. Первая ИИ-конференция в Астане.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 