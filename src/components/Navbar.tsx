import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-6 py-4"
    >
      <div className="container mx-auto">
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg shadow-black/5 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Fully Opaque */}
            <Link to="/" className="flex items-center">
              <img 
                src="/webdeo_logo.png" 
                alt="Web Deo" 
                className="h-10 w-auto opacity-100"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative font-medium transition-all duration-300 text-gray-600 hover:text-gray-900 ${
                      location.pathname === link.path
                        ? 'text-gray-900'
                        : ''
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions - Right Side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} className="text-gray-600" /> : <Sun size={18} className="text-gray-600" />}
              </button>

              {/* CTA Button - Gradient Pill */}
              <Link 
                to="/contact" 
                className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Book a Meeting
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} className="text-gray-600" /> : <Menu size={20} className="text-gray-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg shadow-black/5 p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                      location.pathname === link.path
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-600 hover:bg-white/40 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Book a Meeting
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
