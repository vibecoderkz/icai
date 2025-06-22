'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface SpeakerSectionProps {
  id: string
  name: string
  title: string
  topic: string
  description: string
  imageGradient: string
  accentColor: 'purple' | 'blue' | 'cyan'
  imagePath?: string
}

export default function SpeakerSection({ 
  id, 
  name, 
  title, 
  topic, 
  description, 
  imageGradient,
  accentColor,
  imagePath 
}: SpeakerSectionProps) {
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          gradient: 'from-neon-purple to-purple-400',
          border: 'border-neon-purple/30',
          glow: 'shadow-neon-purple/20',
          text: 'text-neon-purple'
        }
      case 'blue':
        return {
          gradient: 'from-neon-blue to-blue-400',
          border: 'border-neon-blue/30',
          glow: 'shadow-neon-blue/20',
          text: 'text-neon-blue'
        }
      case 'cyan':
        return {
          gradient: 'from-cyan-400 to-neon-blue',
          border: 'border-cyan-400/30',
          glow: 'shadow-cyan-400/20',
          text: 'text-cyan-400'
        }
      default:
        return {
          gradient: 'from-neon-purple to-neon-blue',
          border: 'border-neon-purple/30',
          glow: 'shadow-neon-purple/20',
          text: 'text-neon-purple'
        }
    }
  }

  const colors = getColorClasses(accentColor)

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r ${imageGradient} opacity-10 rounded-full blur-3xl`} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

              <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12">
          {/* Изображение спикера слева в красивой рамке */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center items-center"
          >
            {imagePath ? (
              <div className={`relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 ${colors.border} bg-gradient-to-br from-dark-secondary/20 to-dark-bg/40 backdrop-blur-sm shadow-2xl ${colors.glow}`}>
                <Image 
                  src={imagePath}
                  alt={`${name} - ${title}`}
                  fill
                  className="object-cover object-center rounded-2xl"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                />
                {/* Внутреннее свечение */}
                <div className={`absolute inset-0 bg-gradient-to-t from-${accentColor}-500/10 via-transparent to-transparent`}></div>
              </div>
            ) : (
              /* Placeholder изображение */
              <div className={`w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl bg-gradient-to-br ${imageGradient} border-2 ${colors.border} backdrop-blur-sm shadow-2xl ${colors.glow} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-6xl">👨‍💼</span>
                  </div>
                  <p className="text-white/60">Фото будет добавлено</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Информация о спикере справа */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6 lg:space-y-8 flex flex-col justify-center"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-6xl font-thin text-white mb-4"
              >
                {name}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`text-lg md:text-xl lg:text-2xl font-light ${colors.text} mb-6 lg:mb-8`}
              >
                {title}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`p-6 lg:p-8 rounded-2xl bg-dark-secondary/40 border ${colors.border} backdrop-blur-sm`}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-4 lg:mb-6">
                «{topic}»
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center`}>
                <span className="text-white text-xl">🧠</span>
              </div>
              <div>
                <p className="text-white font-medium">Экспертное выступление</p>
                <p className="text-gray-400 text-sm">10 минут</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 