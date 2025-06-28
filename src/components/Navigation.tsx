'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="text-2xl font-bold text-white hover:text-neon-blue transition-colors"
          >
            ICAI
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                pathname === '/'
                  ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                  : 'text-gray-300 hover:text-white hover:bg-dark-secondary/50'
              }`}
            >
              Форум
            </Link>
            
            <Link
              href="/course"
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                pathname === '/course'
                  ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                  : 'text-gray-300 hover:text-white hover:bg-dark-secondary/50'
              }`}
            >
              Курс
            </Link>

            <a
              href="https://www.instagram.com/arnakairat?igsh=cHFtZndnbDNjYnht"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              <span className="text-2xl">📸</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 