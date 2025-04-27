'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { JivoChat } from '@/app/components/jivochat'
import { AgeConfirm } from '@/app/components/AgeConfirm'
import { HeaderContacts } from '@/app/ui/header/ui/HeaderContacts'
import { HomeHeader } from '@/app/ui/header/HomeHeader'
import { HomeFooter } from '@/app/ui/footer/HomeFooter'
import { I18nextProvider } from 'react-i18next'
import i18next from './i18n'
import { TranslatedHead } from './TranslatedHead'
import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

const queryClient = new QueryClient()

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <TranslatedHead />
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
    </>
  )
}
