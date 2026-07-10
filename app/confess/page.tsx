'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SoulContract from '@/components/SoulContract'

export default function ConfessPage() {
  const [openContract, setOpenContract] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const handleOpen = () => setOpenContract(true)
  const handleClose = () => setOpenContract(false)

  const brandImages = [
    '/team/EBFD727F-2783-4566-8E16-E9D4F72EDA6C.png',
    '/webimages/3BE02BC8-9DCF-4B48-9D13-880A3D2AF411.png',
    '/webimages/C5E6FC04-9576-4B76-8975-1322CD6E54C3.png',
  ]

  const brandMetadata = [
    {
      title: 'Volcanic Tanzanian Mastery',
      subtitle: 'Uncompromised Origin',
      description: 'Single-origin, hand-picked high-altitude Arabica beans from 1,400-1,800m elevation',
    },
    {
      title: 'Set It & Forget It',
      subtitle: 'Drop. Tear. Brew.',
      description: 'Fresh, perfectly valved bags land directly at your coordinates on auto-pilot',
    },
    {
      title: 'Join The Movement',
      subtitle: 'Culture Injected',
      description: 'Exclusive access to limited lifestyle merchandise drops and ecosystem activations',
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % brandImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + brandImages.length) % brandImages.length)
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section className="relative w-full pt-24 pb-20 md:pt-32 md:pb-32 bg-gradient-to-b from-zuri-black via-zuri-purple/10 to-zuri-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text column */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto mt-12 md:mt-16"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="block text-white">WAKE UP.</span>
              <span className="gradient-text block">BE BOLD.</span>
              <span className="block text-white">CONFESS TO ZURI.</span>
            </motion.h1>

            {/* Brand Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Zuri isn&apos;t just coffee. It&apos;s a movement born from the volcanic highlands of Tanzania,
              anchored in South African soil, and built for those who refuse to settle for mediocrity.
              We&apos;re not a brand—we&apos;re a tribe of creators, rebels, and coffee obsessives who believe
              that your morning ritual should fuel your boldest ambitions.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex justify-center pt-4">
              <button
                onClick={handleOpen}
                className="px-8 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
              >
                EXECUTE YOUR CONFESSION
              </button>
            </motion.div>
          </motion.div>

          {/* What You Can Confess Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-16 md:mt-24"
          >
            <div className="glass border-premium rounded-2xl p-8 md:p-12 space-y-8">
              <div className="text-center">
                <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">THE CONTRACT</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  What You Can Confess
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  This isn&apos;t a polite contact form. It&apos;s a direct line to the people building Zuri.
                  We read every confession. The sharpest ones shape the roadmap.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/5 rounded-xl p-6 space-y-3 border border-white/10 hover:border-zuri-orange/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zuri-orange/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-zuri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Your Ideas</h3>
                  <p className="text-sm text-gray-400">
                    Ideas for the hunt, drops, or products you wish existed
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/5 rounded-xl p-6 space-y-3 border border-white/10 hover:border-zuri-orange/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zuri-orange/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-zuri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Your Ritual</h3>
                  <p className="text-sm text-gray-400">
                    How you actually drink your coffee when no one is watching
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/5 rounded-xl p-6 space-y-3 border border-white/10 hover:border-zuri-orange/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zuri-orange/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-zuri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Your Vision</h3>
                  <p className="text-sm text-gray-400">
                    What would make Zuri the only coffee you ever buy
                  </p>
                </motion.div>
              </div>

              <div className="text-center pt-4">
                <p className="text-xs text-gray-500">
                  No support tickets. No bots. Just the humans behind Zuri reading what you send.
                  The sharpest confessions get early access, roadmap influence, and invites to future Zuri-Cons.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wide Interactive Image Slider Card - Moved to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-[90vw] md:max-w-[1200px] mx-auto mt-16 md:mt-24"
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10"
              style={{
                boxShadow: '0 10px 30px -10px rgba(255, 85, 0, 0.15), 0 1px 3px rgba(255, 85, 0, 0.1)',
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] md:aspect-[21/10]">
                <Image
                  src={brandImages[currentImage]}
                  alt="Zuri Brand"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {brandImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-zuri-orange w-6' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Information Pane */}
              <div className="bg-black/80 backdrop-blur-sm p-6 md:p-8 border-t border-white/10">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {brandMetadata[currentImage].title}
                  </h3>
                  <p className="text-sm md:text-base text-zuri-orange uppercase tracking-wider">
                    {brandMetadata[currentImage].subtitle}
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    {brandMetadata[currentImage].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {openContract && <SoulContract variant="confess" onClose={handleClose} />}
    </main>
  )
}
