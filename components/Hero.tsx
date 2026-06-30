'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroProps {
  onExploreHunt: () => void
  onJoinSubscription: () => void
}

export default function Hero({ onExploreHunt, onJoinSubscription }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/heroimage/98C11013-595E-445A-A545-B9C4A0443F2B.png',
    '/webimages/3BE02BC8-9DCF-4B48-9D13-880A3D2AF411.png',
    '/webimages/9395087C-3C66-4CAA-B96D-616FE0871D8E.png',
    '/webimages/AEC83A2D-55DF-4FC0-BE41-2B791653F9CD.png',
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
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
    <section className="relative w-full pt-24 pb-20 md:pt-32 md:pb-32 bg-zuri-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text column */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="block text-white">WAKE UP.</span>
            <span className="gradient-text block">BE BOLD.</span>
            <span className="block text-white">STACK YOUR ZURI.</span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button
              onClick={onJoinSubscription}
              className="px-8 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
            >
              SUBSCRIBE TO THE TRIBE
            </button>
            <button
              onClick={onExploreHunt}
              className="px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
            >
              EXPLORE THE HUNT
            </button>
          </motion.div>
        </motion.div>

        {/* Wide Interactive Image Slider Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 max-w-[90vw] md:max-w-[1200px] mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10"
               style={{
                 boxShadow: '0 10px 30px -10px rgba(255, 85, 0, 0.15), 0 1px 3px rgba(255, 85, 0, 0.1)',
               }}
          >
            {/* Image Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={heroImages[currentImage]}
                alt="Zuri Hero"
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
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-zuri-orange w-6' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
