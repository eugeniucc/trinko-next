import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export const TattooPricing = () => {
  const { t } = useTranslation()

  const pricing = t('servicesPage.sections.tattoo.pricing.items', { returnObjects: true }) as {
    title: string
    size: string
    price: string
    name?: string
    description?: string
    text: string
  }[]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {pricing.map((item, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="dark:bg-red-50-900 absolute top-4 right-4 h-12 w-12 rounded-full bg-indigo-100 opacity-20 group-hover:opacity-30" />

          <div className="relative z-10 flex h-full flex-col items-center justify-between gap-4 text-center sm:items-start sm:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>

            <div className="flex items-center justify-between gap-2">
              <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">{item.size}</span>
            </div>

            {item.description && <p className="text-gray-500 dark:text-gray-400">{item.description}</p>}

            <div className="flex w-full flex-col items-center gap-4 sm:items-start lg:flex-row lg:justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
              <Link
                href="#"
                className="w-fit rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none dark:bg-red-500 dark:hover:bg-red-600"
              >
                {item.text}
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
