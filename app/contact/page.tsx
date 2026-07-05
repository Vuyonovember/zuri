'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
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
            CONTACT US
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Get In Touch.
            <span className="block gradient-text">We're Here To Help.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
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
            src="/webimages/EFB87B04-98A0-4E8A-A9DF-6128DA4F26DC.png"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold">Email Us</h2>
            <p className="text-sm sm:text-base text-gray-300">
              For general inquiries, partnership opportunities, or just to say hello, drop us an email.
            </p>
            <a
              href="mailto:mariska@bezuri.co.za"
              className="inline-flex items-center justify-center px-6 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
            >
              mariska@bezuri.co.za
            </a>
          </div>

          <div className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold">Call Us</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Prefer to talk? Give us a call during business hours and we'll be happy to assist you.
            </p>
            <a
              href="tel:+27825538183"
              className="inline-flex items-center justify-center px-6 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
            >
              +27(82)-553-8183
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-6"
        >
          {!submitted ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-semibold text-center">Send Us a Message</h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-center">
                Fill out the form below and we'll get back to you within 24-48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
                >
                  SEND MESSAGE
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-5xl">✨</div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-gray-400">
                Thank you for reaching out. We'll get back to you within 24-48 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setName('')
                  setEmail('')
                  setMessage('')
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
              >
                Send Another Message
              </button>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
