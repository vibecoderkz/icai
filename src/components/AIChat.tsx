'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateConversationId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9)
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Если это первое сообщение, создаем новый ID разговора
    const isNewConversation = !conversationId
    if (isNewConversation) {
      setConversationId(generateConversationId())
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            { role: 'user', content: input.trim() }
          ],
          isNewConversation
        })
      })

      const data = await response.json()

      if (data.success) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, assistantMessage])
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error('Chat error:', error)
      let errorContent = 'Извините, произошла ошибка. Попробуйте еще раз или свяжитесь с нами через Instagram @arnakairat'
      
      // Специальные сообщения для разных типов ошибок
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          errorContent = 'Чат временно недоступен. Пожалуйста, свяжитесь с нами через Instagram @arnakairat для получения информации о наших услугах.'
        } else if (error.message.includes('Failed to get chat response')) {
          errorContent = 'Не удалось получить ответ от ИИ-консультанта. Попробуйте еще раз через несколько секунд.'
        }
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorContent,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([])
    setConversationId(null)
  }

  return (
    <>
      {/* Кнопка чата */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">🤖</span>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Окно чата */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-dark-secondary/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl flex flex-col"
          >
            {/* Заголовок чата */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">ИИ-Консультант ICAI</h3>
                  <p className="text-gray-400 text-sm">Онлайн</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Очистить чат"
                >
                  🗑️
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Сообщения */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 py-8">
                  <div className="text-4xl mb-4">👋</div>
                  <p>Привет! Я ИИ-консультант ICAI.</p>
                  <p className="text-sm mt-2">Задайте вопрос о наших курсах и форуме!</p>
                </div>
              )}
              
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                        : 'bg-gray-700/50 text-gray-100'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {message.role === 'assistant' ? (
                        <ReactMarkdown 
                          rehypePlugins={[rehypeHighlight]}
                          components={{
                            // Стилизация элементов Markdown для темной темы
                            h1: ({children}) => <h1 className="text-lg font-bold mb-2 text-white">{children}</h1>,
                            h2: ({children}) => <h2 className="text-base font-semibold mb-2 text-gray-100">{children}</h2>,
                            h3: ({children}) => <h3 className="text-sm font-medium mb-1 text-gray-200">{children}</h3>,
                            p: ({children}) => <p className="mb-2 last:mb-0 text-gray-100">{children}</p>,
                            ul: ({children}) => <ul className="list-disc list-inside mb-2 space-y-1 ml-2">{children}</ul>,
                            ol: ({children}) => <ol className="list-decimal list-inside mb-2 space-y-1 ml-2">{children}</ol>,
                            li: ({children}) => <li className="text-gray-100">{children}</li>,
                            strong: ({children}) => <strong className="font-semibold text-white">{children}</strong>,
                            em: ({children}) => <em className="italic text-gray-200">{children}</em>,
                            code: ({children}) => <code className="bg-gray-800 px-1 py-0.5 rounded text-xs font-mono text-green-400">{children}</code>,
                            pre: ({children}) => <pre className="bg-gray-900 text-green-400 p-2 rounded-lg overflow-x-auto text-xs mb-2 border border-gray-600">{children}</pre>,
                            blockquote: ({children}) => <blockquote className="border-l-4 border-neon-purple pl-3 italic text-gray-300 mb-2">{children}</blockquote>,
                            a: ({href, children}) => <a href={href} className="text-neon-blue hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                            // Специальная обработка эмодзи и символов
                            span: ({children}) => <span className="text-gray-100">{children}</span>
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      ) : (
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      )}
                    </div>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString('ru-RU', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-700/50 p-3 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-gray-400 text-sm">печатает...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Поле ввода */}
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Напишите ваш вопрос..."
                  className="flex-1 resize-none bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors max-h-24"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xl">📤</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 