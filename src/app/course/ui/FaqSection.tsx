'use client'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslation } from 'react-i18next'

export const FaqSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const { t } = useTranslation()

  const items = t('coursePage.faqSection.items', { returnObjects: true }) as {
    question: string
    answer: string
  }[]

  return (
    <section ref={sectionRef} className="container mx-auto mb-20 px-4">
      <h2 className="mb-6 text-4xl font-bold lg:text-6xl">{t('coursePage.faqSection.title')}</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <AccordionItem className="cursor-pointer" value={String(i)}>
              <AccordionTrigger>
                <h3>{el.question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>{el.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  )
}
