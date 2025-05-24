'use client'

import { motion } from 'framer-motion'

export const MapBoxContacts = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 text-white"
      >
        <h2 className="text-4xl font-bold">Тату-салон TrinkoTattoo в Кишиневе</h2>
        <div className="mb-6 flex flex-col gap-4 text-lg">
          <p>Ищете лучший тату-салон в Кишиневе? Добро пожаловать в TrinkoTattoo - мы расположены в самом центре города.</p>
          <p>
            Наши талантливые мастера с многолетним опытом готовы воплотить любые ваши идеи в качественные татуировки. Будь то
            маленький изящный рисунок или полноценный рукав - мы создаем индивидуальные работы, подчеркивающие ваш стиль.
          </p>
          <p>
            Мы уделяем особое внимание стерильности, безопасности и комфорту, чтобы ваш визит к нам запомнился только приятными
            впечатлениями.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
