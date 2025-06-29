interface RegistrationData {
  fullName: string
  email: string
  phone: string
  profession: string
  source: string
  promoCode?: string
}

interface CourseApplicationData {
  fullName: string
  email: string
  phone: string
  profession: string
  experience: string
  motivation: string
  promocode: string
  courseType: string
}

export const sendToTelegram = async (data: RegistrationData): Promise<boolean> => {
  try {
    const message = `
📅 Новая регистрация на AI-Форум ICAI:
👤 ФИО: ${data.fullName}
📧 Email: ${data.email}
📱 Телефон: ${data.phone}
💼 Роль: ${data.profession}
🔎 Источник: ${data.source}${data.promoCode ? `\n🎫 Промокод: ${data.promoCode}` : ''}
⏰ Время: ${new Date().toLocaleString('ru-RU')}
    `.trim()

    console.log('📤 Отправка сообщения в Telegram...')
    
    // Отправляем через наш API endpoint
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('❌ Ошибка API:', errorData)
      return false
    }

    const result = await response.json()
    console.log('✅ Сообщение успешно отправлено в Telegram')
    return true
    
  } catch (error) {
    console.error('❌ Ошибка отправки в Telegram:', error)
    return false
  }
}

export const sendCourseApplication = async (data: CourseApplicationData): Promise<boolean> => {
  try {
    const message = `
🎓 Новая заявка на курс ICAI:
📚 Курс: ${data.courseType}
👤 ФИО: ${data.fullName}
📧 Email: ${data.email}
📱 Телефон: ${data.phone}
💼 Профессия: ${data.profession}
🎯 Опыт с ИИ: ${data.experience}
💭 Мотивация: ${data.motivation}${data.promocode ? `\n🎫 Промокод: ${data.promocode}` : ''}
⏰ Время: ${new Date().toLocaleString('ru-RU')}
    `.trim()

    console.log('📤 Отправка заявки на курс в Telegram...')
    
    // Отправляем через наш API endpoint
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('❌ Ошибка API:', errorData)
      return false
    }

    const result = await response.json()
    console.log('✅ Заявка на курс успешно отправлена в Telegram')
    return true
    
  } catch (error) {
    console.error('❌ Ошибка отправки заявки на курс в Telegram:', error)
    return false
  }
}

export const createTelegramMessage = (data: RegistrationData): string => {
  return `
📅 Новая регистрация на AI-Форум ICAI:
👤 ФИО: ${data.fullName}
📧 Email: ${data.email}
📱 Телефон: ${data.phone}
💼 Роль: ${data.profession}
🔎 Источник: ${data.source}${data.promoCode ? `\n🎫 Промокод: ${data.promoCode}` : ''}
⏰ Время: ${new Date().toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}
  `.trim()
} 