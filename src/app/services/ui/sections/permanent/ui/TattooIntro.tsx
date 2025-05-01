import { motion } from 'framer-motion'

export const TattooIntro = () => {
  return (
    <div className="flex flex-col gap-4">
      <motion.h2
        className="mb-4 text-4xl font-bold md:text-5xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
      >
        Permanent Makeup Services in Chisinau
      </motion.h2>
      <motion.p
        className="text-black"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Enhance your natural beauty with our professional permanent makeup services in Chisinau. Our experienced technicians
        provide precise, long-lasting results for eyebrows, eyeliner, and lips—perfect for anyone seeking a low-maintenance,
        polished look every day.
      </motion.p>
    </div>
  )
}
