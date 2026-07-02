'use client'

import { motion, PanInfo } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function WhyZuri() {
  const cards = [
    {
      id: 1,
      title: 'Uncompromised Origin',
      header: 'Volcanic Tanzanian Mastery',
      body: 'No corporate commercial blends. Single-origin, hand-picked high-altitude Arabica beans, roasted to a precise, bold profile that hits smoothly every morning.',
      image: '/webimages/EFB87B04-98A0-4E8A-A9DF-6128DA4F26DC.png',
    },
    {
      id: 2,
      title: 'Drop. Tear. Brew.',
      header: 'Set It & Forget It',
      body: 'Choose your delivery frequency once. Fresh, perfectly valved bags land directly at your coordinates on auto-pilot. Your ritual never runs dry, no grocery store lines required.',
      image: '/webimages/3BE02BC8-9DCF-4B48-9D13-880A3D2AF411.png',
    },
    {
      id: 3,
      title: 'Culture Injected',
      header: 'Join The Movement',
      body: 'A subscription is your formal entry into the tribe. Get exclusive access to limited lifestyle merchandise drops, local product hunts, and unannounced ecosystem activations.',
      image: '/webimages/C5E6FC04-9576-4B76-8975-1322CD6E54C3.png',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold && currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-zuri-black via-zuri-purple/10 to-zuri-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">WHY ZURI</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">THE ZURI DIFFERENCE</span>
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div className="relative">
          {/* Mobile/Tablet Swipeable */}
          <div className="md:hidden overflow-hidden">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {cards.map((card) => (
                <div key={card.id} className="min-w-full px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass border-premium rounded-2xl overflow-hidden"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-xs tracking-[0.25em] text-zuri-orange uppercase">{card.title}</p>
                      <h3 className="text-xl font-bold text-white">{card.header}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{card.body}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass border-premium rounded-2xl overflow-hidden hover:border-zuri-orange/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-xs tracking-[0.25em] text-zuri-orange uppercase">{card.title}</p>
                  <h3 className="text-xl font-bold text-white">{card.header}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dot Indicators (Mobile) */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-zuri-orange w-6' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
