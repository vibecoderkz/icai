'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const programData = [
  { time: '16:00 – 16:10', title: 'Открытие форума', description: 'Приветствие участников и знакомство с программой' },
  { time: '16:10 – 16:20', title: 'Толкын', description: '«Data Science в нефтяной отрасли»' },
  { time: '16:20 – 16:30', title: 'Даурен', description: '«ИИ, переговоры и деньги: как выигрывать в строительстве в 2025»' },
  { time: '16:30 – 16:40', title: 'Марат', description: '«Как за неделю создать, при помощи ИИ, телеграм бота на Python»' },
  { time: '16:40 – 16:50', title: 'Иван', description: '«Есть ли предел развитию искусственного интеллекта?»' },
  { time: '16:50 – 17:00', title: 'Алибек', description: '«Как заменить рутину в бизнесе искусственным интеллектом»' },
  { time: '17:00 – 17:15', title: '3 выпускника ICAI', description: 'Презентации AI-проектов' },
  { time: '17:15 – 17:25', title: 'Перерыв + нетворкинг', description: 'Время для общения и обмена контактами' },
  { time: '17:25 – 18:25', title: 'Воркшоп', description: 'Создание AI-видео (ChatGPT, MidJourney, Kling)' },
  { time: '18:25 – 18:35', title: 'Мини-панель', description: '«Что дальше?»' },
  { time: '18:35 – 18:45', title: 'Розыгрыш призов', description: 'Подарки для участников' },
  { time: '18:45 – 18:55', title: 'Закрытие + общее фото', description: 'Завершение мероприятия и общее фото' },
]

export default function ProgramSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('program')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="program" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-bg to-dark-secondary" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-thin mb-8 text-white">
            Программа <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">форума</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Полный день погружения в мир искусственного интеллекта
          </p>
        </motion.div>

        <div className="space-y-4">
          {programData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-xl bg-dark-secondary/40 border border-gray-700/30 backdrop-blur-sm hover:border-neon-purple/30 transition-all duration-300 hover:bg-dark-secondary/60">
                <div className="md:w-32 flex-shrink-0">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30">
                    <span className="text-sm font-medium text-neon-blue">{item.time}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block w-8 h-8 rounded-full border-2 border-neon-purple/30 group-hover:border-neon-purple group-hover:bg-neon-purple/20 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-purple/0 to-neon-blue/0 group-hover:from-neon-purple/50 group-hover:to-neon-blue/50 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            * Программа может быть скорректирована
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/20">
            <span className="text-neon-blue">⏱️</span>
            <span className="text-white">Общая продолжительность: 3 часа</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 