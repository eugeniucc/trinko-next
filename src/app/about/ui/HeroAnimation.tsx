'use client'

import { motion } from 'framer-motion'
import { HeroContent } from './HeroContent'

export const HeroAnimation = () => {
  return (
    <motion.section initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      <HeroContent />
    </motion.section>
  )
}
