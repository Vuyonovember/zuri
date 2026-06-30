'use client'

import { motion } from 'framer-motion'

export default function PricingTiers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
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
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">SELECT YOUR FUEL TIER</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">STACK YOUR ZURI</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose your commitment level. From personal rituals to enterprise anchors, we have the fuel for your focus.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Tier 01 */}
          <motion.div
            variants={itemVariants}
            className="glass border-premium rounded-2xl p-8 space-y-6 hover:border-zuri-orange/50 transition-all duration-300"
          >
            <div>
              <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">TIER 01</p>
              <h3 className="text-2xl font-bold mb-2">The Personal Ritual</h3>
              <p className="text-sm text-gray-400">250g</p>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold">R150</p>
              <p className="text-sm text-gray-400">One-Time Purchase</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-2xl font-bold text-zuri-orange">R125</p>
                <p className="text-sm text-gray-400">Recurring Monthly Drop</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                Elite single-origin counter unit perfectly valved for individual flavor preservation
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Access to digital ecosystem drops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Flavor preservation technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Monthly curated selections</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange">
              SELECT TIER 01
            </button>
          </motion.div>

          {/* Tier 02 */}
          <motion.div
            variants={itemVariants}
            className="glass border-premium rounded-2xl p-8 space-y-6 hover:border-zuri-orange/50 transition-all duration-300 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-zuri-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                POPULAR
              </span>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">TIER 02</p>
              <h3 className="text-2xl font-bold mb-2">The Team Catalyst</h3>
              <p className="text-sm text-gray-400">1kg</p>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold">R400</p>
              <p className="text-sm text-gray-400">One-Time Purchase</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-2xl font-bold text-zuri-orange">R350</p>
                <p className="text-sm text-gray-400">Recurring Monthly Drop</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                Engineered for high-traffic focus sessions, creative studios, and scaling communal spaces
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Never run dry on auto-pilot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Perfect for teams of 5-15</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Priority support & refills</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange">
              SELECT TIER 02
            </button>
          </motion.div>

          {/* Tier 03 */}
          <motion.div
            variants={itemVariants}
            className="glass border-premium rounded-2xl p-8 space-y-6 hover:border-zuri-orange/50 transition-all duration-300"
          >
            <div>
              <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">TIER 03</p>
              <h3 className="text-2xl font-bold mb-2">The Enterprise Anchor</h3>
              <p className="text-sm text-gray-400">5kg+ Bulk Workspace</p>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold">Custom</p>
              <p className="text-sm text-gray-400">Bulk Tiering</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-2xl font-bold text-zuri-orange">R350/kg</p>
                <p className="text-sm text-gray-400">Baseline pricing</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                Automated Coffee-as-a-Service (CaaS) logic with premium extraction hardware deployment
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Unannounced workspace culture activations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Uno Game Days & custom brand drops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zuri-orange">✓</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange">
              CONTACT FOR TIER 03
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
