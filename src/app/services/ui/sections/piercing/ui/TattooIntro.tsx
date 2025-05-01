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
        Professional Piercing Services in Chisinau
      </motion.h2>
      <motion.p
        className="text-black"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Our Chisinau studio offers expert body piercing services in a clean, comfortable, and professional environment. We
        prioritize your safety by using sterile techniques and top-quality materials. From ear and nose to more advanced
        piercings, our skilled staff ensures a safe and stylish experience tailored to your preferences.
      </motion.p>
    </div>
  )
}
