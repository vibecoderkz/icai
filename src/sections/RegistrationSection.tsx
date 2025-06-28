'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function RegistrationSection() {
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

    const element = document.getElementById('registration')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="registration" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-blue-900/10 to-dark-secondary" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="p-12 rounded-2xl bg-dark-secondary/40 border border-red-400/30 backdrop-blur-sm">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
              <span className="text-4xl">⚠️</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-thin mb-8 text-white">
              РЕГИСТРАЦИЯ ЗАКРЫТА!
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              ПОДПИСЫВАЙТЕСЬ НА НАШ ИНСТАГРАМ,<br />
              СКОРО БУДЕТ НОВЫЙ ИИ-МИТАП!
            </p>
            
            <a
              href="https://www.instagram.com/arnakairat?igsh=cHFtZndnbDNjYnht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">📸</span>
              Подписаться на Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 