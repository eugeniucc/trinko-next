"use client";

import { Roboto, Montserrat } from "next/font/google";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import i18next from "./i18n";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trinko Tattoo",
  url: "https://www.trinkotattoo.ink/",
  logo: "/logo/icon.png",
  image: "/logo/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+37360833389",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.instagram.com/trinko_tattoo/",
    "https://t.me/Trinkonfox",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Албишоара 4, ТЦ Атриум",
    addressLocality: "Кишинев",
    postalCode: "MD-2005",
    addressCountry: "MD",
  },
  openingHours: ["Mo-Fr 10:00-20:00", "Sa-Su 11:00-18:00"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.0146",
    longitude: "28.8558",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation();

  return (
    <html lang="ru">
      <head>
        <meta name="description" content={t("description")} />
        <meta name="keywords" content={t("keywords")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("openGraphTitle")} />
        <meta property="og:description" content={t("openGraphDescription")} />
        <meta property="og:image" content="/logo/icon.png" />
        <meta property="og:url" content={t("openGraphUrl")} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TrinkoTattoo" />
        <meta property="og:locale" content={i18next.language} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("twitterTitle")} />
        <meta name="twitter:description" content={t("twitterDescription")} />
        <meta name="twitter:image" content="/logo/icon.png" />
        <meta name="twitter:site" content="@TrinkoTattoo" />
        <meta name="twitter:creator" content="@TrinkoTattoo" />
        <link rel="icon" href="/logo/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link rel="manifest" href="/logo/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <title>{t("title")}</title>
      <body
        className={`${roboto.variable} ${montserrat.variable} antialiased bg-gray-100 text-[14px]`}
      >
        <I18nextProvider i18n={i18next}>
          {children}
          <SpeedInsights />
        </I18nextProvider>
      </body>
    </html>
  );
}
