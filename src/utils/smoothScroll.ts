// Улучшенная функция smooth scroll
export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.offsetTop - offset
  const startPosition = window.pageYOffset
  const distance = elementPosition - startPosition
  const duration = Math.min(Math.abs(distance) / 2, 1000) // Максимум 1 секунда
  let start: number | null = null

  function animation(currentTime: number) {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  // Easing функция для плавной анимации
  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// Функция для добавления smooth scroll к кнопкам
export const addSmoothScrollToButtons = () => {
  // Добавляем обработчики к кнопкам навигации
  const navButtons = document.querySelectorAll('[data-scroll-to]')
  
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = button.getAttribute('data-scroll-to')
      if (targetId) {
        smoothScrollTo(targetId)
      }
    })
  })
} 