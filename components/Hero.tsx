'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroProps {
  onExploreHunt: () => void
  onJoinSubscription: () => void
}

export default function Hero({ onExploreHunt, onJoinSubscription }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/newheader/79F2CCC9-4077-4154-8766-B9EFC9E4727B.png',
    '/newheader/2E48810F-4B3D-43DD-8B5B-72DD9820F845.png',
    '/newheader/A40A1719-57AB-497B-93EE-695CB6216E62.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

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
        {/* Wide Interactive Image Slider Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[90vw] md:max-w-[1200px] mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10"
               style={{
                 boxShadow: '0 10px 30px -10px rgba(255, 85, 0, 0.15), 0 1px 3px rgba(255, 85, 0, 0.1)',
               }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] md:aspect-[21/9]">
              <AnimatePresence>
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImage]}
                    alt="Zuri Hero"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
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
      </div>
    </section>
  )
}
