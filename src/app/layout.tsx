import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Форум в Астане • 28 июня 2025 | Первая ИИ-конференция в Казахстане',
  description: 'ИИ — новая грамотность. Присоединяйтесь к первой AI-конференции в Астане: 3 экспертных доклада, практические воркшопы по ChatGPT, MidJourney и Kling. Билеты от 2000₸.',
  keywords: 'AI форум Астана, ИИ конференция Казахстан, ChatGPT воркшоп, MidJourney обучение, Kling AI, искусственный интеллект 2025, нейросети, Data Science, автоматизация',
  authors: [{ name: 'ICAI Team' }],
  creator: 'ICAI',
  publisher: 'ICAI',
  robots: 'index, follow',
  metadataBase: new URL('https://icai.kz'),
  alternates: {
    canonical: 'https://icai.kz',
  },
  openGraph: {
    title: 'AI-Форум в Астане • 28 июня 2025',
    description: 'ИИ — новая грамотность. Первая ИИ-конференция в Астане с экспертными докладами и практическими воркшопами.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://icai.kz',
    siteName: 'AI-Форум ICAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Форум в Астане 28 июня 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Форум в Астане • 28 июня 2025',
    description: 'ИИ — новая грамотность. Первая ИИ-конференция в Астане.',
    images: ['/og-image.jpg'],
    creator: '@icai_kz',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'AI-Форум в Астане',
              description: 'ИИ — новая грамотность. Первая ИИ-конференция в Астане.',
              startDate: '2025-06-28T16:00:00+06:00',
              endDate: '2025-06-28T19:00:00+06:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Астана',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Астана',
                  addressCountry: 'KZ',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'ICAI',
                url: 'https://icai.kz',
              },
              offers: {
                '@type': 'Offer',
                price: '2000',
                priceCurrency: 'KZT',
                availability: 'https://schema.org/InStock',
                url: 'https://icai.kz',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 