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
          <h2 className="text-center text-3xl font-bold sm:text-start md:text-4xl">Black & Grey Refill</h2>
          <p className="text-gray-400">30–45 minutes</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">350 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-center text-3xl font-bold sm:text-start md:text-4xl">Color Touch-Up</h2>
          <p className="text-gray-400">40–60 minutes</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">450 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-center text-3xl font-bold sm:text-start md:text-4xl">Shading Enhancement</h2>
          <p className="text-gray-400">25–35 minutes</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">300 lei</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h2 className="text-center text-3xl font-bold sm:text-start md:text-4xl">Line Reinforcement</h2>
          <p className="text-gray-400">20–30 minutes</p>
        </div>
        <p className="text-3xl font-bold md:text-4xl">250 lei</p>
      </motion.div>
    </div>
  )
}
