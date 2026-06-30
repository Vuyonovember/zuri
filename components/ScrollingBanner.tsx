'use client'

import { motion } from 'framer-motion'

export default function ScrollingBanner() {
  const features = [
    'PREMIUM TANZANIAN SINGLE-ORIGIN',
    'HANDPICKED AT 1,400-1,800M ELEVATION',
    'COFFEE WITH SOUL',
    'CULTURAL ACTIVATIONS',
    'HIGH-VIBE FOCUS',
    'NOT A BRAND. A MOVEMENT.',
  ]

  return (
    <div className="relative w-full bg-zuri-orange overflow-hidden py-4">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        {[...features, ...features, ...features].map((feature, index) => (
          <span
            key={index}
            className="mx-8 text-sm md:text-base font-bold text-black uppercase tracking-wider"
          >
            {feature}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
