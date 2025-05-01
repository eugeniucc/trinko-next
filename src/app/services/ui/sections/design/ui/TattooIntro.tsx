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
        Custom Tattoo Designs in Chisinau
      </motion.h2>
      <motion.p
        className="text-black"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Our tattoo artists specialize in creating unique custom designs tailored to your vision. Whether you&#39;re looking for a
        traditional piece, modern style, or something entirely original, we&#39;ll work with you to bring your idea to life in a
        way that matches your personality and preferences.
      </motion.p>
    </div>
  )
}
