'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PartnersPage() {
  const [employees, setEmployees] = useState(10)
  const [cupsPerDay, setCupsPerDay] = useState(2)
  const [includeMachine, setIncludeMachine] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employees,
          cupsPerDay,
          includeMachine,
        }),
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-4"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange">
            PARTNER WITH US
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Build With The
            <span className="block gradient-text">Zuri Movement.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            We're not just selling coffee - we're building a premium ecosystem. Partner with us to bring authentic African coffee culture to your space.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-[21/9]"
        >
          <Image
            src="/partnerpage/59B111FE-83B8-4B57-86D1-6F2688980B50.png"
            alt="Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Shop-in-Shop */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold">Shop-in-Shop Partnerships</h2>
          <p className="text-sm sm:text-base text-gray-300">
            Transform your space into a premium coffee destination. We partner with restaurants, cafes, tattoo shops, barbers, fuel stations, and any business that wants to elevate their customer experience with authentic Tanzanian single-origin coffee. It doesn't matter what industry you're in - if you have people, we have the coffee.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            We supply premium whole beans and can install our own branded coffee machines in your location. We work out a custom deal that makes sense for your business model and customer base.
          </p>
        </motion.div>

        {/* Office Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold">Office Coffee Solutions</h2>
          <p className="text-sm sm:text-base text-gray-300">
            Fuel your team with premium coffee. We install our machines in your office space and offer flexible rental options. You subscribe to receive fresh beans delivered monthly based on your team's consumption needs.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Before we set up, we conduct a thorough survey of your needs: number of employees, daily coffee consumption, peak brewing times, and flavor preferences. This ensures we provide the right equipment and bean supply for your specific office culture.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.25em] text-zuri-orange">WHO WE PARTNER WITH</p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-1">Your Business Type Doesn't Matter</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">🍽️ Restaurants & Cafes</h3>
              <p>Elevate your menu with premium single-origin coffee. We supply beans and equipment to complement your existing offerings.</p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">💈 Barbers & Tattoo Shops</h3>
              <p>Create a premium waiting experience. Your clients appreciate quality - give them coffee that matches your craft.</p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">🌿 Dispensaries & Lifestyle Shops</h3>
              <p>Perfect pairing for elevated retail experiences. Our bold, premium coffee complements your curated product selection.</p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">⛽ Fuel Stations & Convenience</h3>
              <p>Stand out from the competition. Offer travelers and locals a coffee experience worth stopping for.</p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">🏢 Business Offices</h3>
              <p>Machine rental + monthly bean subscription. We survey your team's needs and keep your break room stocked with premium fuel.</p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">🎨 Creative Spaces & Co-working</h3>
              <p>Fuel the creators. Perfect for studios, agencies, and collaborative workspaces where coffee is part of the culture.</p>
            </div>
          </div>
        </motion.div>

        {/* Secondary Image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-[21/9]"
        >
          <Image
            src="/partnerpage/03704717-B289-4FF3-8AE2-B3293E149ECE.png"
            alt="Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Partnership Form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-6"
        >
          {!submitted ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-semibold text-center">Ready to Partner?</h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-center">
                Tell us about your office needs and we'll create a custom coffee solution for you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 flex justify-between">
                    <span>Number of Employees</span>
                    <span className="text-zuri-orange font-semibold">{employees}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-zuri-orange"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1</span>
                    <span>500</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300 flex justify-between">
                    <span>Cups per Day (per employee)</span>
                    <span className="text-zuri-orange font-semibold">{cupsPerDay}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={cupsPerDay}
                    onChange={(e) => setCupsPerDay(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-zuri-orange"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeMachine}
                    onChange={(e) => setIncludeMachine(e.target.checked)}
                    className="w-5 h-5 accent-zuri-orange rounded"
                  />
                  <span className="text-sm text-gray-300">
                    Include coffee machine rental
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
                >
                  SUBMIT PARTNERSHIP REQUEST
                </button>
              </form>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className="text-sm text-gray-400 text-center">Or contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:hello@bezuri.co.za"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    hello@bezuri.co.za
                  </a>
                  <a
                    href="tel:+27825538183"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    +27(82)-553-8183
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-5xl">✨</div>
              <h3 className="text-2xl font-bold">Request Received!</h3>
              <p className="text-gray-400">
                We'll review your needs and get back to you within 24-48 hours with a custom partnership proposal.
              </p>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className="text-sm text-gray-400 text-center">Need to reach us sooner?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:hello@bezuri.co.za"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    hello@bezuri.co.za
                  </a>
                  <a
                    href="tel:+27825538183"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    +27(82)-553-8183
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
