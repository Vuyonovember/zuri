'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const [currentImage, setCurrentImage] = useState(0)

  const storyImages = [
    '/webimages/B69DC046-40D7-4402-B3AE-50A0977AED35.png',
    '/webimages/3BE02BC8-9DCF-4B48-9D13-880A3D2AF411.png',
    '/webimages/EFB87B04-98A0-4E8A-A9DF-6128DA4F26DC.png',
  ]

  const storyMetadata = [
    {
      title: 'The Founders',
      subtitle: 'Vuyo & Mariska',
      description: 'Varsity College graduates who saw a void in the South African coffee market',
    },
    {
      title: 'The Mission',
      subtitle: 'Coffee With Soul',
      description: 'Building a premium beverage ecosystem rooted in African design culture',
    },
    {
      title: 'The Vision',
      subtitle: 'A Lifestyle Movement',
      description: 'Expanding from single-origin coffee to a complete creative ecosystem',
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % storyImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + storyImages.length) % storyImages.length)
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
          {/* Wide Interactive Image Slider Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[90vw] md:max-w-[1200px] mx-auto"
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10"
              style={{
                boxShadow: '0 10px 30px -10px rgba(255, 85, 0, 0.15), 0 1px 3px rgba(255, 85, 0, 0.1)',
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={storyImages[currentImage]}
                  alt="Zuri Story"
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
                {storyImages.map((_, index) => (
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
                    {storyMetadata[currentImage].title}
                  </h3>
                  <p className="text-sm md:text-base text-zuri-orange uppercase tracking-wider">
                    {storyMetadata[currentImage].subtitle}
                  </p>
                  <p className="text-sm md:text-base text-gray-300">
                    {storyMetadata[currentImage].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text column - below card */}
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
              <span className="block text-white">MEET THE FOUNDERS.</span>
            </motion.h1>

            {/* Brand Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              In 2026, Vuyo November and Mariska Jacobs looked at the South African coffee market and saw a void.
              They didn't want to register another trading business—they set out to construct a cultural bridge.
              Zuri isn't just coffee. It's a movement built by creators, for creators.
            </motion.p>
          </motion.div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-16 md:mt-24"
          >
            <div className="glass border-premium rounded-2xl p-8 md:p-12 space-y-8">
              <div className="text-center">
                <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">WHAT WE STAND FOR</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our Core Values
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  We don't hide behind blank spaces. True luxury is full of life, texture, and authentic human joy.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/5 rounded-xl p-6 space-y-3 border border-white/10 hover:border-zuri-orange/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zuri-orange/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-zuri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Bold Expression</h3>
                  <p className="text-sm text-gray-400">
                    Rich patterns, warm neon glares, and authentic African design culture
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Radical Connection</h3>
                  <p className="text-sm text-gray-400">
                    Coffee is the original social network. We bring incredible people together
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Origin Respect</h3>
                  <p className="text-sm text-gray-400">
                    Single-origin beans from Tanzania's high-altitude volcanic soils
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white/5 rounded-xl p-6 space-y-3 border border-white/10 hover:border-zuri-orange/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zuri-orange/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-zuri-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">High-Energy Creativity</h3>
                  <p className="text-sm text-gray-400">
                    Official fuel source for creators, developers, and corporate rebels
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16 md:mt-24"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass border-premium rounded-2xl p-8 space-y-4">
                <p className="text-xs tracking-[0.25em] text-zuri-orange">OUR MISSION</p>
                <h2 className="text-2xl font-bold text-white">What We're Here To Do</h2>
                <p className="text-gray-300 leading-relaxed">
                  To eradicate uncalibrated, soul-less coffee routines by delivering a high-energy, premium product wrapped in authentic African design culture that actively connects, inspires, and fuels global creative movements.
                </p>
              </div>

              <div className="glass border-premium rounded-2xl p-8 space-y-4">
                <p className="text-xs tracking-[0.25em] text-zuri-orange">OUR VISION</p>
                <h2 className="text-2xl font-bold text-white">Where We're Going</h2>
                <p className="text-gray-300 leading-relaxed">
                  To expand the Zuri ecosystem from a premium whole bean single-origin standard into a complete lifestyle movement spanning high-end merchandise, social retail experiences, ready-to-drink functional beverages, and decentralized creative hubs across the continent.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
