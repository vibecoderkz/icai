'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import { sendCourseApplication } from '@/utils/telegram'

interface FormData {
  fullName: string
  email: string
  phone: string
  profession: string
  experience: string
  motivation: string
}

export default function CoursePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const success = await sendCourseApplication(formData)
      
      if (success) {
        setIsSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          profession: '',
          experience: '',
          motivation: ''
        })
      } else {
        alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const modules = [
    {
      title: "Prompting (1-2)",
      description: "основы и шаблоны",
      icon: "💬"
    },
    {
      title: "Image Generation (3-5)",
      description: "стиль, камера, брендинг",
      icon: "🎨"
    },
    {
      title: "Video Generation (6-8)",
      description: "сценарий, эффекты, монтаж",
      icon: "🎬"
    },
    {
      title: "Vibe-Coding (9-12)",
      description: "архитектура, код, API",
      icon: "💻"
    },
    {
      title: "Монетизация (13-20)",
      description: "UX, клиенты, развитие",
      icon: "💰"
    }
  ]

  const results = [
    "Владение базовыми и «мощными» приёмами промпт-инженерии",
    "Навыки генерации и редактирования изображений",
    "Навыки создания коротких видео с эффектами и звуком",
    "Понимание архитектуры AI-приложений, библиотек, API и MCP-подхода",
    "Практический опыт поиска и обслуживания первых клиентов",
    "Итоговые артефакты: чат-игра, портфолио изображений, серия видеороликов, MVP AI-проекта, первые платные клиенты"
  ]

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-secondary" />
        
        {/* Декоративные элементы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-thin mb-8 text-white">
              Курс «Практика ИИ‑инструментов<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                и Вайб‑Кодинг»
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-400 mb-12 leading-relaxed max-w-4xl mx-auto">
              Освойте ключевые ИИ‑подходы и разработайте собственный AI‑продукт, получив первых платных клиентов уже во время обучения
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-dark-secondary/40 border border-neon-purple/30 backdrop-blur-sm">
                <div className="text-4xl mb-4">⏱️</div>
                <div className="text-xl font-medium text-white">10 недель</div>
                <div className="text-gray-400">20 уроков</div>
              </div>
              
              <div className="p-6 rounded-xl bg-dark-secondary/40 border border-neon-blue/30 backdrop-blur-sm">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-xl font-medium text-white">Для начинающих</div>
                <div className="text-gray-400">Без IT-фона</div>
              </div>
              
              <div className="p-6 rounded-xl bg-dark-secondary/40 border border-green-400/30 backdrop-blur-sm">
                <div className="text-4xl mb-4">💡</div>
                <div className="text-xl font-medium text-white">Практика</div>
                <div className="text-gray-400">Реальные проекты</div>
              </div>
            </div>

            <div className="text-3xl md:text-4xl font-light text-neon-blue mb-8">
              Создай продукт и получи плату уже на курсе!
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href="#application"
                className="inline-flex items-center gap-4 px-12 py-6 text-xl font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-full hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">🚀</span>
                Подать заявку на курс
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Результаты обучения */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary via-blue-900/10 to-dark-bg" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-thin mb-8 text-white">
              Результаты обучения
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Что вы получите после прохождения курса
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-dark-secondary/40 border border-gray-700/30 backdrop-blur-sm hover:border-neon-purple/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Модули курса */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/10 to-dark-secondary" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-thin mb-8 text-white">
              Модули курса
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              5 ключевых направлений для полного освоения ИИ-инструментов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-dark-secondary/40 border border-gray-700/30 backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-6xl mb-6 text-center">{module.icon}</div>
                <h3 className="text-xl font-medium text-white mb-4 text-center">
                  {module.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA в секции модулей */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-neon-purple/30 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
                Готовы изучать ИИ-инструменты?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Присоединяйтесь к курсу и станьте экспертом в области искусственного интеллекта
              </p>
              <a
                href="#application"
                className="inline-flex items-center gap-4 px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-neon-purple to-neon-blue rounded-full hover:from-purple-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-xl">📝</span>
                Оставить заявку
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Финальный проект */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary via-green-900/10 to-dark-bg" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-thin mb-8 text-white">
              Финальный проект
            </h2>
            
            <div className="p-12 rounded-2xl bg-dark-secondary/40 border border-green-400/30 backdrop-blur-sm mb-12">
              <div className="text-6xl mb-8">🚀</div>
              
              <h3 className="text-3xl font-medium text-white mb-6">
                MVP AI‑продукта + первый платёж
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Критерии: рабочий сервис, лендинг, ≥ 1 клиент, презентация ≤ 5 мин
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-4 rounded-lg bg-dark-bg/50">
                  <div className="text-2xl mb-2">🎮</div>
                  <div className="text-sm text-gray-400">Чат-игра</div>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg/50">
                  <div className="text-2xl mb-2">🖼️</div>
                  <div className="text-sm text-gray-400">Портфолио изображений</div>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg/50">
                  <div className="text-2xl mb-2">🎥</div>
                  <div className="text-sm text-gray-400">30-сек видео</div>
                </div>
                <div className="p-4 rounded-lg bg-dark-bg/50">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-sm text-gray-400">Первый клиент</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl text-gray-400 mb-4">Сертификация</div>
              <div className="text-xl text-neon-blue">
                «Member of International Community of Artificial Intelligence»
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-green-900/10 to-dark-secondary" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-thin mb-8 text-white">
              Подать заявку на курс
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Заполните форму, и мы свяжемся с вами для обсуждения деталей
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-12 rounded-2xl bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-400/30 backdrop-blur-sm"
            >
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-3xl font-medium text-white mb-4">
                Заявка отправлена!
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Спасибо за интерес к курсу. Мы свяжемся с вами в ближайшее время.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 text-lg text-white bg-gradient-to-r from-neon-purple to-neon-blue rounded-full hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
              >
                Подать еще одну заявку
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-dark-secondary/40 border border-gray-700/30 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Полное имя *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors"
                      placeholder="Введите ваше полное имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-300 mb-2">
                      Профессия *
                    </label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors"
                      placeholder="Ваша текущая профессия"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                    Опыт работы с ИИ *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-gray-600 text-white focus:outline-none focus:border-neon-purple transition-colors"
                  >
                    <option value="">Выберите ваш уровень</option>
                    <option value="Никогда не использовал ИИ">Никогда не использовал ИИ</option>
                    <option value="Базовый (ChatGPT, простые промпты)">Базовый (ChatGPT, простые промпты)</option>
                    <option value="Средний (различные ИИ-инструменты)">Средний (различные ИИ-инструменты)</option>
                    <option value="Продвинутый (создание ИИ-продуктов)">Продвинутый (создание ИИ-продуктов)</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-2">
                    Почему вы хотите изучать ИИ? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors resize-none"
                    placeholder="Расскажите о ваших целях и мотивации..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-4 px-12 py-4 text-xl font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-full hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <span className="text-2xl">🚀</span>
                        Отправить заявку
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Дополнительная информация */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-400 mb-6">
              Есть вопросы? Напишите нам в Instagram
            </p>
            <a
              href="https://www.instagram.com/arnakairat?igsh=cHFtZndnbDNjYnht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 text-lg text-gray-300 border border-gray-600 rounded-full hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
            >
              <span className="text-xl">📸</span>
              @arnakairat
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 