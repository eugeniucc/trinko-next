import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export const AllServicesFaq = () => {
  return (
    <div className="mb-10 flex flex-col md:mb-25">
      <h2 className="mb-6 text-4xl font-bold lg:text-6xl">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <AccordionItem value="faq-1">
            <AccordionTrigger>What types of piercings do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer a wide range of piercings including earlobe, cartilage, nose, belly button, and more. Our team ensures each
              procedure is done safely and professionally.
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
            <AccordionTrigger>Is piercing safe and sterile?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We follow strict sterilization protocols, use single-use needles, and ensure a hygienic environment to
              minimize any risk of infection.
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
            <AccordionTrigger>What is tattoo filling?</AccordionTrigger>
            <AccordionContent>
              Tattoo filling is the process of refreshing or restoring an existing tattoo by adding color, definition, or shading
              to improve its appearance.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AccordionItem value="faq-4">
            <AccordionTrigger>How often should a tattoo be refilled?</AccordionTrigger>
            <AccordionContent>
              It depends on the ink quality, placement, and sun exposure. Many clients come for touch-ups every few years to
              maintain vibrancy.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AccordionItem value="faq-5">
            <AccordionTrigger>Do you create custom tattoo designs?</AccordionTrigger>
            <AccordionContent>
              Yes, our artists specialize in creating custom tattoo designs based on your personal ideas, preferences, and style.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AccordionItem value="faq-6">
            <AccordionTrigger>Can I bring my own tattoo concept?</AccordionTrigger>
            <AccordionContent>
              Definitely. We welcome personal sketches or reference images and collaborate with you to bring your vision to life.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AccordionItem value="faq-7">
            <AccordionTrigger>What areas can be treated with permanent makeup?</AccordionTrigger>
            <AccordionContent>
              We offer permanent makeup for eyebrows, eyeliner, and lips to help define and enhance facial features with
              long-lasting results.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <AccordionItem value="faq-8">
            <AccordionTrigger>Is permanent makeup really permanent?</AccordionTrigger>
            <AccordionContent>
              Not exactly. While it&#39;s long-lasting, it typically fades over 1–3 years and may require occasional touch-ups to
              maintain color.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <AccordionItem value="faq-9">
            <AccordionTrigger>Can a bad tattoo be corrected?</AccordionTrigger>
            <AccordionContent>
              In many cases, yes. Our artists can improve or cover unwanted tattoos using advanced correction techniques or
              prepare it for cover-ups.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <AccordionItem value="faq-10">
            <AccordionTrigger>Does correction require laser removal?</AccordionTrigger>
            <AccordionContent>
              Not always. Some corrections can be done directly with ink, but complex cases may benefit from partial laser fading
              beforehand.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <AccordionItem value="faq-11">
            <AccordionTrigger>Does getting a tattoo hurt?</AccordionTrigger>
            <AccordionContent>
              Pain levels vary depending on the placement and individual sensitivity. Most describe the sensation as a tolerable
              scratch or sting.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <AccordionItem value="faq-12">
            <AccordionTrigger>How do I prepare for a tattoo session?</AccordionTrigger>
            <AccordionContent>
              Eat well, stay hydrated, avoid alcohol and caffeine, and wear comfortable clothes. This helps reduce discomfort and
              ensures the best results.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      </Accordion>
    </div>
  )
}
