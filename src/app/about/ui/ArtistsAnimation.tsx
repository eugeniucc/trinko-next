'use client'

import { motion } from 'framer-motion'

export function ArtistsAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  )
}
