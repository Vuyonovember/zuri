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
          <p className="text-sm sm:text-base text-gray-300">
            A Zuri Coffee Party is a high-energy, sensory collision of local culture, underground music, deep conversations, and premium caffeine. It's an immersive space where our single-origin Tanzanian brew flows freely under striking orange, purple, and teal neon lights. We bring together a handpicked, vibrant crowd of local creatives, tech developers, underground fashion designers, and corporate rebels who are all actively pushing boundaries.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            We take over unique urban venues, dim the house lights, turn up the bass, and set up massive, dark wooden tasting tables stacked with fresh beans, steaming matte-black mugs, and pour-over carafes. It's not about sitting silently in a corner with headphones on; it's about breaking down walls, sharing raw ideas, laughing, and building collaborative movements that reshape our cities. This is where the Zuri lifestyle comes alive in physical form. You don't just drink the coffee - you experience the collective energy of the room.
          </p>
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
          <p className="text-sm sm:text-base text-gray-300">
            Zuri does not operate in an isolated corporate bubble. We are built to act as the ultimate social glue and collaborative engine for local creators and high-end independent brands. We actively partner with the local vanguard - progressive spaces and independent operators who share our uncompromising obsession with authentic craftsmanship, bold design, and premium community experiences.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Whether we are setting up dynamic pop-up espresso bars inside elite local streetwear boutiques, fueling late-night hackathons and design sprints in modern co-working hubs, or collaborating with local artists on exclusive, limited-edition packaging drops, we believe in the power of the collective. By integrating our 'Coffee With Soul' directly into the spaces where local culture is actively being created, we ensure our ecosystem remains deeply rooted in real communities. We don't just buy and sell; we build, support, and grow together.
          </p>
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
          <p className="text-sm sm:text-base text-gray-300">
            Zuri is a comprehensive lifestyle movement, which means our distinctive cultural aesthetic extends far beyond the beverage itself. We don't make generic promotional items; we design premium, high-end merchandise collections that serve as the official uniform for our creative community. Every piece we release is meticulously calibrated to reflect the exact same energy, bold typography, and intricate traditional geometric patterns that define our coffee packaging.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            From heavy-weight, matte-black apparel structured for the modern creator to custom, high-contrast ceramics designed to elevate your daily brewing ritual, our merchandise is built for those who refuse to fit into ordinary, clinical boxes. It is a physical extension of the 'Wake Up. Be Bold. Be Zuri.' manifesto - crafted with soul, built to last, and designed to make a clear statement wherever you step.
          </p>
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
