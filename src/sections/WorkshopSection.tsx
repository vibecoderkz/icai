'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface WorkshopToolSectionProps {
  id: string
  number: string
  title: string
  tool: string
  description: string
  icon: string
  color: string
  bgGradient: string
  requirements?: string[]
  features?: string[]
}

function WorkshopToolSection({ 
  id, 
  number, 
  title, 
  tool, 
  description, 
  icon, 
  color, 
  bgGradient,
  requirements,
  features 
}: WorkshopToolSectionProps) {
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

    const element = document.getElementById(id)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [id])

  return (
    <section 
      id={id} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Фон */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`} />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r ${color} opacity-10 rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r ${color} opacity-5 rounded-full blur-3xl animate-pulse delay-1000`} />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая часть - информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Номер и инструмент */}
            <div className="flex items-center gap-6">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white font-bold text-2xl`}>
                {number}
              </div>
              <div>
                <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${color} text-white font-bold text-xl mb-2`}>
                  {tool}
                </div>
              </div>
            </div>

            {/* Заголовок */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-thin text-white"
            >
              {title}
            </motion.h2>

            {/* Описание */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Дополнительная информация */}
            {(requirements || features) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {requirements && (
                  <div className="p-6 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm">
                    <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                      <span>⚙️</span> Требования
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      {requirements.map((req, idx) => (
                        <li key={idx}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {features && (
                  <div className="p-6 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm">
                    <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                      <span>✨</span> Возможности
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      {features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Правая часть - иконка */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className={`w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-9xl shadow-2xl animate-pulse-slow`}>
              {icon}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Основная секция воркшопа
export default function WorkshopSection() {
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

    const element = document.getElementById('workshop')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Вступительная секция */}
      <section id="workshop" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-secondary" />
        
        {/* Декоративные элементы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-thin mb-8 text-white">
              Воркшоп
            </h2>
            <h3 className="text-4xl md:text-5xl font-light mb-8 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Сделай AI-видео за 30 минут
            </h3>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              Практическое занятие с реальными инструментами. 
              Каждый участник создаст собственное AI-видео от идеи до результата.
            </p>

            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30 backdrop-blur-sm">
              <span className="text-2xl">⏱️</span>
              <div className="text-left">
                <p className="text-white font-medium">Продолжительность: 60 минут</p>
                <p className="text-gray-400 text-sm">Включая практику и обратную связь</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Секции для каждого инструмента */}
      <WorkshopToolSection
        id="workshop-chatgpt"
        number="01"
        title="Придумай сценарий"
        tool="ChatGPT"
        description="Создаём креативную идею и структуру для видео с помощью ИИ-помощника. Научимся правильно формулировать промпты и получать качественные сценарии."
        icon="✍️"
        color="from-green-400 to-green-600"
        bgGradient="from-dark-bg via-green-900/10 to-dark-secondary"
        requirements={['Аккаунт OpenAI', 'Креативное мышление', 'Базовые навыки английского']}
        features={['Генерация идей', 'Структура сценария', 'Диалоги и тексты', 'Оптимизация промптов']}
      />

      <WorkshopToolSection
        id="workshop-midjourney"
        number="02"
        title="Создай картинки"
        tool="MidJourney"
        description="Генерируем визуальные элементы и изображения для нашего видео. Изучаем продвинутые техники создания качественных AI-изображений."
        icon="🎨"
        color="from-purple-400 to-purple-600"
        bgGradient="from-dark-bg via-purple-900/10 to-dark-secondary"
        requirements={['Аккаунт Discord', 'Подписка MidJourney', 'Понимание композиции']}
        features={['Высокое качество', 'Стилизация', 'Персонажи и объекты', 'Художественные стили']}
      />

      <WorkshopToolSection
        id="workshop-kling"
        number="03"
        title="Получи видео"
        tool="Kling"
        description="Превращаем статичные изображения в динамичное AI-видео. Создаём плавные анимации и движения для финального результата."
        icon="🎬"
        color="from-blue-400 to-blue-600"
        bgGradient="from-dark-bg via-blue-900/10 to-dark-secondary"
        requirements={['Готовые изображения', 'Понимание видеомонтажа', 'Терпение на рендеринг']}
        features={['Плавная анимация', 'Качество до 4K', 'Различные стили движения', 'Быстрый рендеринг']}
      />
    </>
  )
} 