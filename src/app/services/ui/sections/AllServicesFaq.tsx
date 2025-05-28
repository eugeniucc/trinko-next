import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const AllServicesFaq = () => {
  const { t } = useTranslation()

  const listItems = t('servicesPage.servicesFaq.items', { returnObjects: true }) as {
    question: string
    answer: string
  }[]

  return (
    <div className="mb-10 flex flex-col md:mb-25">
      <h2 className="mb-4 text-4xl font-bold md:text-5xl">{t('servicesPage.servicesFaq.title')}</h2>
      <Accordion type="single" collapsible className="w-full">
        {listItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AccordionItem value={`faq-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
}
