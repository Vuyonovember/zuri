'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'OUR DIRTY SECRETS', href: '/about' },
    { label: 'PARTNER WITH US', href: '/partners' },
    { label: 'ARTIFACTS', href: '/products' },
    { label: 'CONFESS TO US', href: '/confess' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" aria-label="Go to Zuri home" className="inline-flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative w-32 h-10"
            >
              <Image
                src="/headerfooter/5F514A9D-CF16-4E9F-ABDB-F892868B81BD.PNG"
                alt="Zuri"
                fill
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 hover:text-zuri-orange transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-gray-300 hover:text-zuri-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
