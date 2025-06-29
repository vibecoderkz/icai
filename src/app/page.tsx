import Navigation from '@/components/Navigation'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ProgramSection from '@/sections/ProgramSection'
import SpeakerSection from '@/sections/SpeakerSection'
import WorkshopSection from '@/sections/WorkshopSection'
import RegistrationSection from '@/sections/RegistrationSection'
import Footer from '@/components/Footer'
import AIChat from '@/components/AIChat'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero секция */}
      <HeroSection />

      {/* О мероприятии */}
      <AboutSection />

      {/* Программа форума */}
      <ProgramSection />

      {/* Спикеры */}
      <SpeakerSection
        id="speaker-tolkyn"
        name="Толкын"
        title="Data Scientist, SLB"
        topic="Data Science в нефтяной отрасли"
        description="Практические кейсы применения машинного обучения и анализа данных в нефтегазовой индустрии. Узнаете, как ИИ помогает оптимизировать добычу, предсказывать поломки оборудования и снижать экологические риски."
        imageGradient="from-blue-600 via-cyan-600 to-blue-800"
        accentColor="blue"
        imagePath="/speakers/tolkyn.png"
      />

      <SpeakerSection
        id="speaker-dauren"
        name="Даурен"
        title='CEO "City Innovation"'
        topic="ИИ, переговоры и деньги: как выигрывать в строительстве в 2025"
        description="Реальные стратегии использования ИИ в строительном бизнесе. От автоматизации процессов до прогнозирования стоимости проектов. Практические советы по ведению переговоров и привлечению инвестиций в эпоху ИИ."
        imageGradient="from-cyan-600 via-teal-600 to-cyan-800"
        accentColor="cyan"
        imagePath="/speakers/dauren.png"
      />

      <SpeakerSection
        id="speaker-marat"
        name="Марат"
        title="IT-обозреватель и эксперт"
        topic="Как за неделю создать, при помощи ИИ, телеграм бота на Python"
        description="Основатель комьюнити TechPeople покажет пошаговый процесс создания Telegram-бота с использованием ИИ. Бот автоматически ищет новости про IT и стартапы в Казахстане и публикует их в телеграм канале. Практический воркшоп для разработчиков."
        imageGradient="from-green-600 via-emerald-600 to-green-800"
        accentColor="cyan"
        imagePath="/speakers/marat.png"
      />

      <SpeakerSection
        id="speaker-ivan"
        name="Иван"
        title="AI-евангелист"
        topic="Есть ли предел развитию искусственного интеллекта?"
        description="Погружение в философские и технические аспекты развития ИИ. Обсудим текущие ограничения, потенциальные прорывы и этические вопросы, которые встают перед человечеством на пути к созданию искусственного общего интеллекта."
        imageGradient="from-purple-600 via-blue-600 to-purple-800"
        accentColor="purple"
        imagePath="/speakers/ivan.png"
      />

      <SpeakerSection
        id="speaker-alibek"
        name="Алибек Абдеков"
        title="CEO AVM.AI"
        topic="Как заменить рутину в бизнесе искусственным интеллектом"
        description="Практические решения для автоматизации бизнес-процессов с помощью ИИ. Реальные кейсы внедрения AI-инструментов, экономия времени и ресурсов, а также стратегии перехода от рутинных задач к стратегическому мышлению."
        imageGradient="from-orange-600 via-red-600 to-orange-800"
        accentColor="purple"
        imagePath="/speakers/alibek.png"
      />

      {/* Воркшоп */}
      <WorkshopSection />

      {/* Регистрация */}
      <RegistrationSection />

      {/* Футер */}
      <Footer />

      {/* ИИ Чат */}
      <AIChat />
    </main>
  )
} 