'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroProps {
  onExecuteContract: () => void
  onExploreHunt: () => void
}

export default function Hero({ onExecuteContract, onExploreHunt }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/heroimage/98C11013-595E-445A-A545-B9C4A0443F2B.png',
    '/webimages/3BE02BC8-9DCF-4B48-9D13-880A3D2AF411.png',
    '/webimages/9395087C-3C66-4CAA-B96D-616FE0871D8E.png',
    '/webimages/AEC83A2D-55DF-4FC0-BE41-2B791653F9CD.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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
    <section 
      className="relative w-full overflow-hidden pt-24 pb-20 md:min-h-[80vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:gap-14">
          {/* Text column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 text-center md:text-left space-y-6 md:space-y-8 max-w-3xl mx-auto md:mx-0"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="block text-white">WAKE UP.</span>
              <span className="gradient-text block">BE BOLD.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0"
            >
              Premium Tanzanian single-origin coffee for those who refuse to settle.
              Zuri is a beautiful, unapologetic explosion of culture, deep African soul, and premium community.
            </motion.p>

            {/* Value chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-2 pt-1"
            >
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase bg-white/5 border border-zuri-orange/70 text-gray-100">
                Meticulously Cultivated
              </span>
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase bg-white/5 border border-teal-400/70 text-gray-100">
                Structurally Designed
              </span>
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase bg-white/5 border border-amber-400/70 text-gray-100">
                Fueled With Soul
              </span>
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase bg-white/5 border border-fuchsia-500/70 text-gray-100">
                Not A Brand. A Movement.
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
            >
              <button
                onClick={onExecuteContract}
                className="px-8 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
              >
                EXECUTE CONTRACT
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
      </div>
    </section>
  )
}
