'use client'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const FaqSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className="container mx-auto mb-20 px-4">
      <h2 className="mb-6 text-4xl font-bold lg:text-6xl">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 0, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="1">
            <AccordionTrigger>Что включает в себя курс по тату?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Что включает в себя курс по тату?</h3>
              <p>
                Курс включает теоретические занятия и практическую работу, где вы изучите основы татуировки, оборудование и
                техники.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 1, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="2">
            <AccordionTrigger>Какие навыки я получу на курсе?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Какие навыки я получу на курсе?</h3>
              <p>
                Вы научитесь рисовать эскизы, работать с оборудованием, а также получите знания по уходу за кожей после
                татуировки.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 2, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="3">
            <AccordionTrigger>Как долго длится курс?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Как долго длится курс?</h3>
              <p>Курс длится 3 месяца, с возможностью продолжить практику в студии после завершения обучения.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 3, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="4">
            <AccordionTrigger>Я могу ли работать с клиентами после завершения курса?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Я могу ли работать с клиентами после завершения курса?</h3>
              <p>Да, после завершения курса вы получите сертификат, который позволит вам работать в тату-салоне.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 4, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="5">
            <AccordionTrigger>Есть ли возможность пройти курс онлайн?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Есть ли возможность пройти курс онлайн?</h3>
              <p>Да, курс доступен как в офлайн, так и в онлайн-формате.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 5, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="6">
            <AccordionTrigger>Какие материалы мне понадобятся для курса?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Какие материалы мне понадобятся для курса?</h3>
              <p>Все материалы предоставляются на курсе, но вам потребуется собственный блокнот для эскизов.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 6, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="7">
            <AccordionTrigger>Как записаться на курс?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Как записаться на курс?</h3>
              <p>Записаться можно через наш сайт или связавшись с нами по телефону.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      </Accordion>
    </section>
  )
}
