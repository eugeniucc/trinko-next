import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export const TattooFaq = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <AccordionItem value="faq-1">
          <AccordionTrigger>Does getting a piercing hurt?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Pain Level</h3>
            <p>
              Pain varies depending on the location and individual sensitivity. Most people experience a quick pinch and some
              soreness afterward.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <AccordionItem value="faq-2">
          <AccordionTrigger>How long does a piercing take to heal?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Healing Time</h3>
            <p>
              Healing times depend on the type of piercing. Earlobes typically heal in 6–8 weeks, while cartilage and other areas
              may take several months.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AccordionItem value="faq-3">
          <AccordionTrigger>How should I care for a new piercing?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Aftercare</h3>
            <p>
              Clean the piercing with saline solution twice a day and avoid touching or rotating the jewelry. Follow all
              professional aftercare instructions.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    </Accordion>
  )
}
