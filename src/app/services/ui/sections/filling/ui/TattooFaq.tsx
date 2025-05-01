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
          <AccordionTrigger>Does tattoo filling hurt?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Pain Level</h3>
            <p>
              Tattoo filling generally causes some discomfort, but the level of pain varies depending on the area and individual
              sensitivity. It is usually less intense than getting a full tattoo.
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
          <AccordionTrigger>How long does tattoo filling take to heal?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Healing Time</h3>
            <p>
              Healing times for filling tattoos are similar to those of original tattoos. It can take 2–4 weeks for the surface to
              heal, but complete healing under the skin may take several months.
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
          <AccordionTrigger>How should I care for a filled tattoo?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Aftercare</h3>
            <p>
              For tattoo filling, proper aftercare is essential. Keep the area clean, moisturized, and avoid scratching. Follow
              your artist’s aftercare instructions for the best results.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    </Accordion>
  )
}
