'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

export default function Footer() {

  const footerLinks = [
    { label: 'OUR DIRTY SECRETS', href: '/about' },
    { label: 'PARTNER WITH US', href: '/partners' },
    { label: 'CONFESS TO US', href: '/confess' },
    { label: 'THE FINE PRINT', href: '/legal' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-zuri-black to-zuri-purple/20 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="relative w-40 h-16 mx-auto md:mx-0 mb-4">
              <Image
                src="/headerfooter/46D06CBE-B693-4860-9193-44935904D917.PNG"
                alt="Zuri"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Premium Tanzanian coffee for the bold. Join the movement.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-bold mb-4">NAVIGATE</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-zuri-orange transition-colors">Home</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-zuri-orange transition-colors">Shop</a></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-bold mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-zuri-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-bold mb-4">CONTACT</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@bezuri.co.za" className="text-gray-400 hover:text-zuri-orange transition-colors block">
                hello@bezuri.co.za
              </a>
              <a href="tel:+27825538183" className="text-gray-400 hover:text-zuri-orange transition-colors block">
                +27(82)-553-8183
              </a>
            </div>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a href="https://instagram.com/@bezuri.co.za" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-zuri-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm"
        >
          <p>© 2026 ZURI. All rights reserved. Wake up. Be bold.</p>
        </motion.div>
      </div>
    </footer>
  )
}
