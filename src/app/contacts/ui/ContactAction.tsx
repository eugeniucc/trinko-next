'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export const ContactAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex w-full flex-col gap-4 rounded-lg bg-zinc-800 p-4 sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <div className="flex flex-col gap-4">
          <motion.h2 className="text-3xl font-bold text-white">Готовы к новой татуировке?</motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl text-lg text-white"
          >
            Свяжитесь с нами сегодня, чтобы записаться на консультацию или забронировать сеанс. Наши профессиональные мастера с
            радостью воплотят ваши идеи в качественное тату в нашем салоне в Кишиневе.
          </motion.p>
        </div>
        <motion.div className="mt-6 flex-shrink-0 md:mt-0">
          <Link
            href="#"
            className="block w-fit rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
          >
            Записаться сейчас
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
