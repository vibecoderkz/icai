'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendToTelegram } from '@/utils/telegram'

interface FormData {
  fullName: string
  email: string
  phone: string
  profession: string
  source: string
  promoCode?: string
  consent: boolean
}

const sourceOptions = [
  'Instagram',
  'Threads',
  'От друга',
  'Другое'
]

export default function RegistrationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Проверка промокода "Tech People" (гибкая проверка без учета пробелов и регистра)
      if (data.promoCode && data.promoCode.toLowerCase().replace(/\s+/g, '') === 'techpeople') {
        // Перенаправление на WhatsApp
        window.open('https://wa.me/+77752837306', '_blank')
        
        // Отправка в Telegram с информацией о промокоде
        await sendToTelegram({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          profession: data.profession,
          source: data.source,
          promoCode: data.promoCode
        })
        
        reset()
        setIsSubmitting(false)
        return
      }

      // Отправка в Telegram
      const success = await sendToTelegram({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        profession: data.profession,
        source: data.source,
        promoCode: data.promoCode
      })

      if (success) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Не удалось отправить данные')
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      alert('Произошла ошибка при отправке. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePaymentRedirect = () => {
    const kaspiUrl = process.env.NEXT_PUBLIC_KASPI_PAYMENT_URL
    window.open(kaspiUrl, '_blank')
  }

  if (isSubmitted) {
    return (
      <section id="registration" className="relative min-h-screen flex items-center justify-center px-6">
        {/* Фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-green-900/10 to-dark-secondary" />
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-2xl bg-dark-secondary/40 border border-green-400/30 backdrop-blur-sm"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-4xl">✅</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Регистрация успешна!
            </h2>
            
            <div className="text-lg text-gray-300 mb-8 space-y-3">
              <p>Оплатите <strong className="text-green-400">2000 ₸</strong> и отправьте чек на WhatsApp:</p>
              <a 
                href="https://wa.me/77752837306" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-green-400 hover:text-green-300 transition-colors"
              >
                <strong>+7 775 283 7306</strong>
              </a>
            </div>

            <button
              onClick={handlePaymentRedirect}
              className="group relative px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105"
            >
              Перейти к оплате Kaspi
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-blue-900/10 to-dark-secondary" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-thin mb-8 text-white">
            Регистрация
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Заполните форму и станьте частью первой AI-конференции в Астане
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-8 rounded-2xl bg-dark-secondary/40 border border-gray-700/30 backdrop-blur-sm"
        >
          {/* ФИО */}
          <div>
            <label className="block text-white font-medium mb-2">
              ФИО <span className="text-red-400">*</span>
            </label>
            <input
              {...register('fullName', { required: 'ФИО обязательно для заполнения' })}
              type="text"
              placeholder="Введите ваше полное имя"
              className="w-full px-4 py-3 rounded-xl bg-dark-bg/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              {...register('email', { 
                required: 'Email обязателен для заполнения',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Некорректный email адрес'
                }
              })}
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-dark-bg/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Телефон */}
          <div>
            <label className="block text-white font-medium mb-2">
              Телефон <span className="text-red-400">*</span>
            </label>
            <input
              {...register('phone', { required: 'Телефон обязателен для заполнения' })}
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="w-full px-4 py-3 rounded-xl bg-dark-bg/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Профессия */}
          <div>
            <label className="block text-white font-medium mb-2">
              Профессия / роль <span className="text-red-400">*</span>
            </label>
            <input
              {...register('profession', { required: 'Профессия обязательна для заполнения' })}
              type="text"
              placeholder="Например: Разработчик, Предприниматель, Студент..."
              className="w-full px-4 py-3 rounded-xl bg-dark-bg/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
            />
            {errors.profession && (
              <p className="text-red-400 text-sm mt-1">{errors.profession.message}</p>
            )}
          </div>

          {/* Источник */}
          <div>
            <label className="block text-white font-medium mb-2">
              Откуда узнали о мероприятии?
            </label>
            <select
              {...register('source', { required: 'Выберите источник' })}
              className="w-full px-4 py-3 rounded-xl bg-dark-bg/50 border border-gray-600/50 text-white focus:border-neon-blue focus:outline-none transition-colors"
            >
              <option value="">Выберите вариант</option>
              {sourceOptions.map(option => (
                <option key={option} value={option} className="bg-dark-bg">
                  {option}
                </option>
              ))}
            </select>
            {errors.source && (
              <p className="text-red-400 text-sm mt-1">{errors.source.message}</p>
            )}
          </div>

          {/* Промокод */}
          <div>
            <label className="block text-white font-medium mb-2">
              Промокод <span className="text-gray-400">(необязательно)</span>
            </label>
            <input
              {...register('promoCode')}
              type="text"
              placeholder="Введите промокод, если имеется"
              className="w-full px-4 py-3 rounded-xl bg-dark-bg/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
            />
          </div>

          {/* Согласие */}
          <div className="flex items-start gap-3">
            <input
              {...register('consent', { required: 'Необходимо согласие на обработку данных' })}
              type="checkbox"
              id="consent"
              className="mt-1 w-5 h-5 rounded border-gray-600/50 bg-dark-bg/50 text-neon-blue focus:ring-neon-blue focus:ring-2"
            />
            <label htmlFor="consent" className="text-gray-300 text-sm leading-relaxed">
              Я согласен(а) на обработку персональных данных и принимаю{' '}
              <button
                type="button"
                className="text-neon-blue hover:text-neon-purple transition-colors underline"
              >
                политику конфиденциальности
              </button>
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-400 text-sm">{errors.consent.message}</p>
          )}

          {/* Кнопка отправки */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group relative px-8 py-4 text-lg font-medium text-white border border-neon-purple/50 rounded-full hover:border-neon-purple transition-all duration-300 backdrop-blur-sm bg-dark-secondary/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {isSubmitting ? 'Отправка...' : 'Перейти к оплате'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.form>
      </div>
    </section>
  )
} 