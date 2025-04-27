'use client'

import { useTranslation } from 'react-i18next'

export const TranslatedHead = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={t('openGraphTitle')} />
      <meta property="og:description" content={t('openGraphDescription')} />
      <meta property="og:image" content="https://trinko-next.vercel.app/logo/icon.png" />
      <meta property="og:url" content={t('openGraphUrl')} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TrinkoTattoo" />
      <meta property="og:locale" content={i18n.language} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="trinko-next.vercel.app" />
      <meta property="twitter:url" content="https://trinko-next.vercel.app/" />
      <meta name="twitter:title" content={t('openGraphTitle')} />
      <meta name="twitter:description" content={t('openGraphDescription')} />
      <meta name="twitter:image" content="https://trinko-next.vercel.app/logo/icon.png" />
    </>
  )
}
