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
        Tattoo Recoloring and Filling in Chisinau
      </motion.h2>
      <motion.p
        className="text-black"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Restore the vibrancy of your tattoos with our expert recoloring and filling services in Chisinau. Whether your ink has
        faded over time or needs a touch-up, our artists carefully match colors and shading to refresh your body art while
        preserving its original intent.
      </motion.p>
    </div>
  )
}
