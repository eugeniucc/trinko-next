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
          <h2 className="text-3xl font-bold md:text-4xl">Eyebrow Microblading</h2>
          <p className="text-gray-400">1.5–2 hours</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">1000 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-3xl font-bold md:text-4xl">Eyeliner Tattoo</h2>
          <p className="text-gray-400">1–1.5 hours</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">800 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-3xl font-bold md:text-4xl">Lip Blush Tattoo</h2>
          <p className="text-gray-400">2–2.5 hours</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">1200 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-3xl font-bold md:text-4xl">Touch-Up Session</h2>
          <p className="text-gray-400">45–60 minutes</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">500 lei</p>
      </motion.div>
    </div>
  )
}
