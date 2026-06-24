'use client'

import { motion } from 'framer-motion'

export default function WholeBean() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-zuri-purple/70 via-zuri-black to-zuri-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-3">
            DROP 01 / THE PREMIUM STANDARD
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            WHOLE BEAN SINGLE ORIGIN.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Before the cans, before the merchandise, there is the raw, pure bean. This is the cornerstone of the Zuri ecosystem.
          </p>
        </motion.div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold">The Premium Standard</h3>
          <p className="text-sm sm:text-base text-gray-300">
            Our 250g Tanzanian Single Origin bag is a declaration of pure coffee authority, designed from the ground up for those who respect the meticulous ritual of grinding and brewing fresh coffee.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            We don't do mysterious corporate blends or hidden filler beans. Every single bean in this bag was grown in the same rich volcanic earth, exposed to the same clean mountain air, and harvested in the exact same seasonal cycle. This creates an uncompromised uniformity in the roast, allowing the true, natural characteristics of the terroir to cut through cleanly, regardless of your brewing setup.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            This is the ultimate fuel for the deep-focus hours. It's built for the early morning strategy sessions and the late-night development sprints where mental clarity is your highest currency.
          </p>
        </motion.div>

        {/* Technical Anatomy */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold">🔬 The Technical Anatomy & Tasting Architecture</h3>
          <div className="grid gap-4 md:grid-cols-2 text-sm sm:text-base text-gray-300">
            <div>
              <p className="text-zuri-orange font-semibold mb-1">Origin:</p>
              <p>100% Premium Tanzanian Arabica Beans</p>
            </div>
            <div>
              <p className="text-zuri-orange font-semibold mb-1">Altitude:</p>
              <p>1400m – 1800m above sea level for optimal acidity and flavor complexity</p>
            </div>
            <div>
              <p className="text-zuri-orange font-semibold mb-1">Varieties:</p>
              <p>Bourbon & Kent</p>
            </div>
            <div>
              <p className="text-zuri-orange font-semibold mb-1">Process:</p>
              <p>Fully Washed & Semi-Washed for a clean, vibrant cup structure</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-zuri-orange font-semibold mb-1">Roast Level:</p>
              <p>Medium Roast - meticulously calibrated to balance bright, energetic top notes with a smooth, heavy body</p>
            </div>
          </div>
        </motion.div>

        {/* Flavor Profile */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold">🍊 The Multi-Layered Flavor Profile</h3>
          <div className="space-y-4 text-sm sm:text-base text-gray-300">
            <div>
              <p className="text-zuri-orange font-semibold mb-1">The Top Notes (Bright & Energetic):</p>
              <p>The immediate sip opens with a vibrant burst of wild berry and crisp, refreshing citrus. This provides a clean sensory wake-up that sparks immediate focus.</p>
            </div>
            <div>
              <p className="text-zuri-orange font-semibold mb-1">The Mid-Notes (Smooth & Soft):</p>
              <p>As the coffee washes over the palate, a delicate, elegant layer of floral undertones softens the acidity, giving the brew a sophisticated, balanced complexity.</p>
            </div>
            <div>
              <p className="text-zuri-orange font-semibold mb-1">The Finish (Deep & Grounded):</p>
              <p>The cup finishes with a heavy, velvety, dark chocolate base note that lingers smoothly. No bitter aftertaste, no hollow finishes - just pure, structural depth that stays with you.</p>
            </div>
          </div>
        </motion.div>

        {/* Product Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 overflow-x-auto"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Product Specifications</h3>
          <table className="w-full text-sm sm:text-base text-gray-300">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-zuri-orange">Product Variant</th>
                <th className="text-left py-3 px-4 text-zuri-orange">Package Size</th>
                <th className="text-left py-3 px-4 text-zuri-orange">Ideal Brewing Methods</th>
                <th className="text-left py-3 px-4 text-zuri-orange">Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-semibold">Tanzanian Single Origin (Whole Bean)</td>
                <td className="py-3 px-4">250g Matte-Textured Bag</td>
                <td className="py-3 px-4">Espresso, Pour Over, Moka Pot, French Press</td>
                <td className="py-3 px-4 text-zuri-orange font-semibold">LIVE & AVAILABLE</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
