'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Lock } from 'lucide-react'

const huntLocations = [
  { id: 1, name: 'The Fountain', hint: '💧 Where water meets culture', locked: true },
  { id: 2, name: 'The Market', hint: '🛍️ Where deals are made', locked: true },
  { id: 3, name: 'The Garden', hint: '🌿 Where nature thrives', locked: true },
  { id: 4, name: 'The Tower', hint: '🏢 Where the city rises', locked: true },
  { id: 5, name: 'The Sacred', hint: '⛪ Where souls gather', locked: true },
]

export default function BloemHunt() {
  const [unlockedLocations, setUnlockedLocations] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        await fetch('/api/hunt-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
        setUnlockedLocations([1, 2, 3, 4, 5])
        setSubmitted(true)
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }

  return (
    <section id="hunt" className="relative py-20 md:py-32 bg-gradient-to-b from-zuri-black via-zuri-purple/10 to-zuri-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">CASH HUNT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">THE BLOEM HUNT</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Five hidden R100 cash drops scattered across Bloemfontein. Unlock the hints, move through the city, and race other Zuri hunters to the prize.
          </p>
        </motion.div>

        {/* Email Unlock Section */}
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12 glass border-premium rounded-2xl p-8"
          >
            <form onSubmit={handleUnlock} className="space-y-4">
              <p className="text-sm text-gray-400 text-center mb-4">
                Enter your email to unlock the hunt locations
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm"
              >
                UNLOCK THE HUNT
              </button>
            </form>
          </motion.div>
        ) : null}

        {/* Hunt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {huntLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
              className={`glass border-premium rounded-xl p-6 text-center transition-all duration-300 ${
                unlockedLocations.includes(location.id)
                  ? 'border-zuri-orange/50 glow-orange-sm'
                  : 'border-white/10'
              }`}
            >
              <div className="flex justify-center mb-4">
                {unlockedLocations.includes(location.id) ? (
                  <MapPin className="text-zuri-orange" size={32} />
                ) : (
                  <Lock className="text-gray-500" size={32} />
                )}
              </div>
              <h3 className="text-lg font-bold mb-2">{location.name}</h3>
              {unlockedLocations.includes(location.id) ? (
                <p className="text-sm text-zuri-orange font-semibold">{location.hint}</p>
              ) : (
                <p className="text-sm text-gray-500">Unlock to reveal</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Referral Section */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center glass border-premium rounded-xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Share & Earn</h3>
            <p className="text-gray-400 mb-6">
              Share your unique referral link with friends. For every person who joins, you both get bonus hints.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm font-mono text-zuri-orange break-all">
              zuri.com/hunt?ref=YOU
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
