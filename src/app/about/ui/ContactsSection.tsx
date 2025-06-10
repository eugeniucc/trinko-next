'use client'

import { MapPin, Phone, Clock, Instagram, Facebook, Send, MessageCircleMore, MessageCircleHeart } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

type Props = {
  titleColor?: string
  className?: string
}

export const ContactsSection = ({ titleColor, className }: Props) => {
  const { t } = useTranslation()

  return (
    <section className={cn('container mx-auto mb-20 px-4', className)}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={cn('mb-8 text-4xl font-bold lg:text-6xl', titleColor)}
      >
        {t('aboutPage.visitSection.title')}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-lg bg-zinc-800 p-6"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">{t('aboutPage.visitSection.location.title')}</h3>
                <p className="text-lg text-white">{t('aboutPage.visitSection.location.address')}</p>
                <p className="mt-1 text-sm text-zinc-400">{t('aboutPage.visitSection.location.description')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
              <div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{t('aboutPage.visitSection.hours.title')}</h3>
                  <p className="text-lg text-white">{t('aboutPage.visitSection.hours.address')} 10:00 - 20:30</p>
                  <p className="mt-1 text-sm text-zinc-400">{t('aboutPage.visitSection.hours.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">{t('aboutPage.visitSection.contacts.title')}</h3>

                <a href="tel:+37379146506" className="text-white">
                  <p className="text-lg text-white duration-200 hover:text-red-500">+373 79 146 506</p>
                </a>
                <p className="mt-1 text-sm text-zinc-400">{t('aboutPage.visitSection.contacts.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-zinc-700 pt-6"
        >
          <h3 className="mb-4 text-xl font-semibold text-white">{t('aboutPage.visitSection.text')}</h3>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.instagram.com/trinko_tattoo/"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com/trinkotattoo"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
            </a>
            <a
              href="https://t.me/Trinkonfox"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
            >
              <Send className="h-5 w-5" />
              <span>Telegram</span>
            </a>
            <a
              href="https://wa.me/37360833389"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
            >
              <MessageCircleMore className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="viber://chat?number=%2B37360833389"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
            >
              <MessageCircleHeart className="h-5 w-5" />
              <span>Viber</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
