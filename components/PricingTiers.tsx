'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function PricingTiers() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      title: 'The Solo Ritual',
      subtitle: 'For the Individual',
      description: 'Premium single-origin beans for your daily focus ritual.',
      image: '/webimages/EFB87B04-98A0-4E8A-A9DF-6128DA4F26DC.png',
      options: ['250g - R150', '500g - R280', '1kg - R540'],
      cta: 'SHOP RANGE',
    },
    {
      id: 2,
      title: 'Coffee Subscriptions',
      subtitle: 'Auto-Pilot Fuel',
      description: 'Never run dry. Premium beans delivered monthly on auto-pilot.',
      image: '/webimages/3BE02BC8-9DCF-4B48-9D13-880A3D2AF411.png',
      options: ['Monthly 250g - R125', 'Monthly 500g - R240', 'Monthly 1kg - R450'],
      cta: 'START SUBSCRIPTION',
    },
    {
      id: 3,
      title: 'Coffee as a Service',
      subtitle: 'Workspace Fuel',
      description: 'Full-service coffee solution with premium hardware and ongoing support.',
      image: '/webimages/C5E6FC04-9576-4B76-8975-1322CD6E54C3.png',
      options: ['Starter Package', 'Enterprise Package', 'Custom Solutions'],
      cta: 'GET STARTED',
    },
    {
      id: 4,
      title: 'Wholesale',
      subtitle: 'Bulk Supply',
      description: 'Premium beans in large quantities for cafes and retailers.',
      image: '/partnerpage/42EF1BCE-938B-4454-94C3-EB46E6E4559A.png',
      options: ['5kg+ Bulk Orders', 'White Label Options', 'Volume Pricing'],
      cta: 'CONTACT US',
    },
  ]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-gradient-to-b from-zuri-black via-zuri-purple/10 to-zuri-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">CHOOSE YOUR STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">HOW YOU BUY</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From personal rituals to enterprise solutions, find your perfect Zuri experience.
          </p>
        </motion.div>

        {/* Swipeable Cards */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass border-premium rounded-2xl overflow-hidden hover:border-zuri-orange/50 transition-all duration-300 cursor-pointer"
                    onClick={() => toggleExpand(card.id)}
                  >
                    {/* Image */}
                    <div className="relative aspect-square md:aspect-[4/3]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                        <p className="text-sm text-zuri-orange uppercase tracking-wider">{card.subtitle}</p>
                      </div>
                      <p className="text-sm text-gray-300">{card.description}</p>

                      {/* Expandable Options */}
                      <AnimatePresence>
                        {expandedCard === card.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-3 border-t border-white/10 space-y-2"
                          >
                            {card.options.map((option, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-sm text-gray-300 flex items-center gap-2"
                              >
                                <span className="text-zuri-orange">•</span>
                                {option}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange">
                        {card.cta}
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-zuri-orange hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-zuri-orange hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
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
