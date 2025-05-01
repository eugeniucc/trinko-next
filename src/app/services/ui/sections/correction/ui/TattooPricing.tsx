import { motion } from 'framer-motion'

export const TattooPricing = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:gap-20 xl:grid-cols-2">
      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-3xl font-bold md:text-4xl">Faded Tattoo Restoration</h2>
          <p className="text-gray-400">1–2 hours</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">700 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-3xl font-bold md:text-4xl">Line Correction</h2>
          <p className="text-gray-400">45–60 minutes</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">500 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-3xl font-bold md:text-4xl">Color Adjustment</h2>
          <p className="text-gray-400">1–1.5 hours</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">650 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-3xl font-bold md:text-4xl">Cover-Up Consultation</h2>
          <p className="text-gray-400">30–45 minutes</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">400 lei</p>
      </motion.div>
    </div>
  )
}
