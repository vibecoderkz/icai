'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AboutSection() {
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

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-thin mb-8 text-white">
            О <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">мероприятии</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 flex items-center justify-center border border-neon-purple/30">
              <span className="text-3xl">📅</span>
            </div>
            <h3 className="text-xl font-medium text-neon-blue mb-2">Дата</h3>
            <p className="text-lg text-gray-300">28 июня 2025</p>
            <p className="text-sm text-gray-400">Суббота, 16:00 - 19:00</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 flex items-center justify-center border border-neon-purple/30">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-medium text-neon-blue mb-2">Место</h3>
            <p className="text-lg text-gray-300">Астана</p>
            <p className="text-sm text-gray-400">Конференц-зал (уточняется)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 flex items-center justify-center border border-neon-purple/30">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-medium text-neon-blue mb-2">Стоимость</h3>
            <p className="text-lg text-gray-300">2000 ₸</p>
            <p className="text-sm text-gray-400">Ранняя регистрация</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Первая конференция по искусственному интеллекту в Астане объединит экспертов, 
            предпринимателей и энтузиастов для обсуждения будущего ИИ в Казахстане.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-xl bg-dark-secondary/30 border border-neon-purple/20 backdrop-blur-sm">
              <h4 className="text-lg font-medium text-neon-purple mb-3">🎯 Что вас ждёт</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Выступления экспертов</li>
                <li>• Практические воркшопы</li>
                <li>• Нетворкинг с единомышленниками</li>
                <li>• Live-демонстрации ИИ-инструментов</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-dark-secondary/30 border border-neon-blue/20 backdrop-blur-sm">
              <h4 className="text-lg font-medium text-neon-blue mb-3">👥 Для кого</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• IT-специалисты</li>
                <li>• Предприниматели</li>
                <li>• Студенты и исследователи</li>
                <li>• Все, кто интересуется ИИ</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 