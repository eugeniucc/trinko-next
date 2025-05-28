import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

type FaqItem = {
  question: string
  answer: string
}

type FaqProps = {
  items: FaqItem[]
}

export const TattooFaq = ({ items }: FaqProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <AccordionItem value={`faq-${i + 1}`}>
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
  )
}
