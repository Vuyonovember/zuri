'use client'

import { motion } from 'framer-motion'

export default function Community() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-zuri-black via-zuri-purple/10 to-zuri-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-3">
            THE COMMUNITY MOVEMENT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            GOOD COFFEE BRINGS US TOGETHER.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            We don't do polite, quiet, sterile cafe openings. We throw Coffee Parties.
          </p>
        </motion.div>

        {/* Coffee Party Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold">The Zuri Coffee Party</h3>
          <ul className="text-sm sm:text-base text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>High-energy sensory collision of local culture, underground music, and premium caffeine</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Immersive space with orange, purple, and teal neon lights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Handpicked crowd of creatives, tech developers, fashion designers, and corporate rebels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Massive tasting tables with fresh beans, steaming mugs, and pour-over carafes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Breaking down walls, sharing raw ideas, and building collaborative movements</span>
            </li>
          </ul>
        </motion.div>

        {/* Collaborative Ecosystems */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold">Fueling the Local Vanguard</h3>
          <ul className="text-sm sm:text-base text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Social glue and collaborative engine for local creators and independent brands</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Partnerships with progressive spaces sharing our obsession with authentic craftsmanship</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Pop-up espresso bars in elite streetwear boutiques</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Fueling late-night hackathons and design sprints in co-working hubs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Collaborative limited-edition packaging drops with local artists</span>
            </li>
          </ul>
        </motion.div>

        {/* High-End Merchandise */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold">Wear the Movement</h3>
          <ul className="text-sm sm:text-base text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Premium high-end merchandise as official uniform for creative community</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Bold typography and intricate traditional geometric patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Heavy-weight matte-black apparel for modern creators</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Custom high-contrast ceramics for daily brewing rituals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zuri-orange mt-1">•</span>
              <span>Physical extension of 'Wake Up. Be Bold. Be Zuri.' manifesto</span>
            </li>
          </ul>
        </motion.div>

        {/* Community Manifesto Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-wrap gap-4 justify-center text-sm sm:text-base text-gray-300 font-mono">
            <span className="text-zuri-orange">// GOOD COFFEE BRINGS US TOGETHER.</span>
            <span className="text-zuri-orange">// BE PART OF SOMETHING REAL.</span>
            <span className="text-zuri-orange">// FUELING THE LATE-NIGHT OPERATORS.</span>
            <span className="text-zuri-orange">// WAKE UP. BE BOLD. BE ZURI.</span>
            <span className="text-zuri-orange">// NOT A CAFÉ. A MOVEMENT.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
