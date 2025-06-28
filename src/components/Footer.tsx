'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { smoothScrollTo } from '@/utils/smoothScroll'

export default function Footer() {
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

    const element = document.getElementById('footer')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      id="footer" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-secondary" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Главный заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-8xl font-thin text-white mb-6">
              ICAI 2025
            </h2>
            <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Первая AI-конференция в Астане. Объединяем экспертов, предпринимателей и энтузиастов для обсуждения будущего ИИ в Казахстане.
            </p>
          </motion.div>

          {/* Дата и место */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30 backdrop-blur-sm">
              <span className="text-3xl">📅</span>
              <div className="text-left">
                <p className="text-white font-medium text-xl">28 июня 2025</p>
                <p className="text-gray-400">Суббота, 16:00 - 19:00</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Контакты */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white mb-8">Контакты</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:info@icai.kz" 
                className="flex items-center justify-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group text-lg"
              >
                <div className="w-16 h-16 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors text-2xl">
                  📧
                </div>
                <span>info@icai.kz</span>
              </a>
              
              <a 
                href="https://wa.me/77752837306" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 text-gray-300 hover:text-green-400 transition-colors group text-lg"
              >
                <div className="w-16 h-16 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-green-400/20 transition-colors text-2xl">
                  📱
                </div>
                <span>+7 775 283 7306</span>
              </a>
              
              <a 
                href="https://t.me/icai_kz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group text-lg"
              >
                <div className="w-16 h-16 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-blue-400/20 transition-colors text-2xl">
                  💬
                </div>
                <span>@icai_kz</span>
              </a>
            </div>
          </motion.div>

          {/* Социальные сети */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white mb-8">Социальные сети</h3>
            
            <div className="space-y-6">
              <a 
                href="https://www.instagram.com/arnakairat?igsh=cHFtZndnbDNjYnht" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group text-lg"
              >
                <div className="w-16 h-16 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-pink-400/20 transition-colors text-2xl">
                  📸
                </div>
                <span>@arnakairat</span>
              </a>
              
              <a 
                href="https://www.threads.net/@arnakairat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group text-lg"
              >
                <div className="w-16 h-16 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-purple-400/20 transition-colors text-2xl">
                  🧵
                </div>
                <span>@arnakairat</span>
              </a>
            </div>
          </motion.div>

          {/* Быстрые ссылки */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white mb-8">Навигация</h3>
            
            <div className="space-y-6">
              <button 
                onClick={() => smoothScrollTo('about')}
                className="block w-full text-gray-300 hover:text-neon-blue transition-colors text-lg py-2"
              >
                О мероприятии
              </button>
              <button 
                onClick={() => smoothScrollTo('program')}
                className="block w-full text-gray-300 hover:text-neon-blue transition-colors text-lg py-2"
              >
                Программа
              </button>
              <button 
                onClick={() => smoothScrollTo('workshop')}
                className="block w-full text-gray-300 hover:text-neon-blue transition-colors text-lg py-2"
              >
                Воркшоп
              </button>
              <button 
                onClick={() => smoothScrollTo('registration')}
                className="block w-full text-gray-300 hover:text-neon-blue transition-colors text-lg py-2"
              >
                Регистрация
              </button>
            </div>
          </motion.div>
        </div>

        {/* Разделитель */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-12" />

        {/* Нижняя часть */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center space-y-6"
        >
          <div className="text-gray-400 text-lg">
            © 2025 ICAI. Все права защищены.
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
            <button 
              className="text-gray-400 hover:text-neon-blue transition-colors"
              onClick={() => {
                alert('Политика конфиденциальности (модальное окно будет добавлено)')
              }}
            >
              Политика конфиденциальности
            </button>
            
            <span className="hidden md:block text-gray-600">|</span>
            
            <div className="text-gray-400">
              Сделано с ❤️ для AI-сообщества
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 