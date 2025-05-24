'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export const ContactPackage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -90 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex w-fit flex-col gap-4 rounded-lg bg-zinc-800 p-4 sm:p-6"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Our Tattoo Studio</h1>
        <p className="max-w-3xl text-lg text-gray-300">
          Have questions about our services or ready to book your appointment? Get in touch with our team of professional tattoo
          artists in Chisinau. We&#39;re here to help bring your tattoo ideas to life.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-white">Индивидуальные тату-пакеты</h2>
        <p className="max-w-3xl text-white">
          Хотите уникальное тату по специальной цене? Мы предлагаем эксклюзивные пакетные предложения для наших клиентов в
          Кишиневе. Получите скидку при заказе нескольких сеансов или комплексного дизайна.
        </p>
        <p className="text-white">Оставьте заявку, и наш менеджер свяжется с вами для обсуждения деталей вашего будущего тату.</p>

        <Link
          href="#"
          className="mr-auto rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
        >
          Заказать консультацию
        </Link>
      </div>
    </motion.div>
  )
}
