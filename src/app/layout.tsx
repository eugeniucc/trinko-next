'use client'

import { Roboto, Montserrat } from 'next/font/google'
import { I18nextProvider } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { JivoChat } from '@/app/components/jivochat'
import { AgeConfirm } from '@/app/components/AgeConfirm'
import { HeaderContacts } from '@/app/ui/header/ui/HeaderContacts'
import { HomeHeader } from '@/app/ui/header/HomeHeader'
import { HomeFooter } from '@/app/ui/footer/HomeFooter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import i18next from './i18n'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '700'],
  subsets: ['latin']
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '700'],
  subsets: ['latin']
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trinko Tattoo',
  url: 'https://www.trinkotattoo.ink/',
  logo: '/logo/icon.png',
  image: '/logo/icon.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+37360833389',
    contactType: 'customer service'
  },
  sameAs: ['https://www.instagram.com/trinko_tattoo/', 'https://t.me/Trinkonfox'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Албишоара 4, ТЦ Атриум',
    addressLocality: 'Кишинев',
    postalCode: 'MD-2005',
    addressCountry: 'MD'
  },
  openingHours: ['Mo-Fr 10:00-20:00', 'Sa-Su 11:00-18:00'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '47.0146',
    longitude: '28.8558'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { t } = useTranslation()
  const queryClient = new QueryClient()

  return (
    <html lang="ru">
      <head>
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t('openGraphTitle')} />
        <meta property="og:description" content={t('openGraphDescription')} />
        <meta property="og:logo" content="/logo/icon.png" />
        <meta property="og:image" content="/logo/icon.png" />
        <meta property="og:url" content={t('openGraphUrl')} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TrinkoTattoo" />
        <meta property="og:locale" content={i18next.language} />

        {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://trinko-next.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TrinkoTattoo - Профессиональные татуировки в Кишиневе" />
        <meta property="og:description" content="Лучший тату-салон в Кишиневе. Уникальные татуировки от профессионалов." />
        <meta property="og:image" content="https://trinko-next.vercel.app/logo/icon.png" />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="trinko-next.vercel.app" />
        <meta property="twitter:url" content="https://trinko-next.vercel.app/" />
        <meta name="twitter:title" content="TrinkoTattoo - Профессиональные татуировки в Кишиневе" />
        <meta name="twitter:description" content="Лучший тату-салон в Кишиневе. Уникальные татуировки от профессионалов." />
        <meta name="twitter:image" content="https://trinko-next.vercel.app/logo/icon.png" />

        {/* Extra RealFavIcon Tags  */}
        <link rel="icon" href="/logo/favicon.ico" />
        <link rel="icon" href="/logo/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/logo/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link rel="manifest" href="/logo/manifest.json" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <title>{t('title')}</title>
      <body className={`${roboto.variable} ${montserrat.variable} bg-gray-100 text-[14px] antialiased`}>
        <I18nextProvider i18n={i18next}>
          <SpeedInsights />
          <Analytics />
          <JivoChat />
          <AgeConfirm />
          <HeaderContacts />
          <HomeHeader />
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          <HomeFooter />
        </I18nextProvider>
      </body>
    </html>
  )
}
