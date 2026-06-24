'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div
            className="hidden md:block absolute inset-y-0 left-0 w-16 opacity-45"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg,#DE2C00 0,#DE2C00 8px,#2D0A31 8px,#2D0A31 16px,#06B6D4 16px,#06B6D4 24px,#DE2C00 24px,#DE2C00 32px)",
              backgroundSize: '32px 32px',
            }}
          />
          <div
            className="hidden md:block absolute inset-y-0 right-0 w-16 opacity-45"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg,#DE2C00 0,#DE2C00 8px,#2D0A31 8px,#2D0A31 16px,#06B6D4 16px,#06B6D4 24px,#DE2C00 24px,#DE2C00 32px)",
              backgroundSize: '32px 32px',
            }}
          />
          <div
            className="md:hidden absolute -top-6 left-1/2 w-4/5 max-w-md h-8 -translate-x-1/2 rounded-full opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg,#DE2C00 0,#DE2C00 8px,#2D0A31 8px,#2D0A31 16px,#06B6D4 16px,#06B6D4 24px,#DE2C00 24px,#DE2C00 32px)",
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-4"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange">
            OUR STORY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Coffee With Soul.
            <span className="block gradient-text">Built by Vuyo & Mariska.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Great movements are never born in corporate boardrooms; they are forged through shared vision, late-night strategy, and a refusal to settle for the status quo.
          </p>
        </motion.div>

        {/* Founders' Story */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="grid gap-8 md:grid-cols-2 items-center"
        >
          <div className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold">The Founders' Journey</h2>
            <p className="text-sm sm:text-base text-gray-300">
              In 2026, Varsity College graduates Vuyo November and Mariska Jacobs looked at the local South African coffee market and saw a glaring void. The industry was saturated with the same recycled concepts - either overly stuffy commercial chains or elitist boutiques that lacked real flavor, culture, and energy.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Armed with strong academic foundations, a wealth of practical professional experience, and an unyielding passion for authentic African lifestyle design, Vuyo and Mariska set out to build something entirely different. They didn't just want to register another trading business; they set out to construct a cultural bridge.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Vuyo and Mariska founded Zuri with a clear, uncompromising mandate: to build a premium, highly professional beverage and lifestyle ecosystem that respects traditional African roots while completely modernizing how the world experiences coffee. They are not just selling products; they are welcoming you into a lifestyle they live every single day.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
            <Image
              src="/webimages/B69DC046-40D7-4402-B3AE-50A0977AED35.png"
              alt="Founders story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.25em] text-zuri-orange">WHAT WE STAND FOR</p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-1">Our Core Values</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">🎨 Bold Expression Over Clean Minimalism</h3>
              <p>
                We don't hide behind blank spaces. Our visual DNA is wrapped in rich, hand-painted traditional geometric patterns, warm neon glares, deep wooden textures, and rich color palettes. We believe that premium quality doesn't have to feel cold and detached. True luxury is full of life, texture, and authentic human joy.
              </p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">🤝 Radical Human Connection</h3>
              <p>
                Coffee is the original social network. It shouldn't be consumed in a rushed, isolated bubble. Zuri is built specifically to act as the ultimate social glue. Whether it's through our high-vibe physical Coffee Parties or our collaborative digital spaces, our goal is to bring incredible people together to spark bigger ideas.
              </p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">🌍 Uncompromising Origin Respect</h3>
              <p>
                We respect the roots. Our single-origin beans aren't just commodities; they are heritage. We source directly from the high-altitude volcanic soils of Tanzania to ensure every single sip carries a heavy, unmistakable structural flavor profile that honors East African agricultural excellence.
              </p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold">⚡ High-Energy Creativity</h3>
              <p>
                We are the official fuel source for local craftsmanship. We design our ecosystems, our packaging, and our spaces to specifically inspire creators, tech developers, fashion designers, and corporate rebels. If you are pushing boundaries, you belong here.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="grid gap-8 md:grid-cols-2 items-center"
        >
          <div className="space-y-6">
            <div className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
              <p className="text-xs tracking-[0.25em] text-zuri-orange">OUR MISSION</p>
              <h2 className="text-2xl font-semibold">What We're Here To Do</h2>
              <p>
                To eradicate uncalibrated, soul-less coffee routines by delivering a high-energy, premium product wrapped in authentic African design culture that actively connects, inspires, and fuels global creative movements.
              </p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4 text-sm sm:text-base text-gray-300">
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
              <p className="text-xs tracking-[0.25em] text-zuri-orange">OUR VISION</p>
              <h2 className="text-2xl font-semibold">Where We're Going</h2>
              <p>
                To expand the Zuri ecosystem from a premium whole bean single-origin standard into a complete lifestyle movement spanning high-end merchandise, social retail experiences, ready-to-drink functional beverages, and decentralized creative hubs across the continent.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
            <Image
              src="/webimages/3BE02BC8-9DCF-4B48-9D13-880A3D2AF411.png"
              alt="Mission and vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
