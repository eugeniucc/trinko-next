'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const HeroAnimation = ({ children }: Props) => {
  return (
    <motion.section initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      {children}
    </motion.section>
  )
}
