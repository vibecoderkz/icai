'use client'

import { motion } from 'framer-motion'
import { smoothScrollTo } from '@/utils/smoothScroll'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-dark-bg to-blue-900/20" />
      
      {/* Абстрактные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-thin mb-8 bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
            AI-Форум в Астане
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            28 июня 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            ИИ — новая грамотность.
          </h2>
          <p className="text-xl md:text-2xl text-neon-blue font-light tracking-wide">
            ПЕРВАЯ ИИ-КОНФЕРЕНЦИЯ В АСТАНЕ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => smoothScrollTo('registration')}
            className="group relative px-12 py-4 text-xl font-medium text-white border border-neon-purple/50 rounded-full hover:border-neon-purple transition-all duration-300 backdrop-blur-sm bg-dark-secondary/30"
          >
            <span className="relative z-10">Зарегистрироваться</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
} 