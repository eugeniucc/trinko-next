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
        Tattoo Services in Chisinau
      </motion.h2>
      <motion.p
        className="text-black"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        At our studio in Chisinau, we adhere to the highest standards of hygiene and safety. We use only sterilized equipment and
        disposable materials to ensure your well-being and peace of mind. Our tattoo artists undergo thorough training and possess
        extensive experience, guaranteeing the high quality of every tattoo we create.
      </motion.p>
    </div>
  )
}
