'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function IndividualsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subscriptionType, setSubscriptionType] = useState('250g')
  const [grindType, setGrindType] = useState('whole-bean')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/individual-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          subscriptionType,
          grindType,
        }),
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const cupsPerMonth = subscriptionType === '250g' ? 30 : 60
  const pricePerCup = subscriptionType === '250g' ? 140 / 30 : 235 / 60

  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-6"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange">
            FOR INDIVIDUALS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            UPGRADE YOUR
            <span className="block gradient-text">MORNING RITUAL.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Your morning routine sets the tone for your entire day. Do not compromise it with stale, over-commercialized, dark-roasted grocery store coffee blends that have been sitting on shelves for months.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-[21/9]"
        >
          <Image
            src="/partnerpage/42EF1BCE-938B-4454-94C3-EB46E6E4559A.png"
            alt="Zuri Coffee"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* The Ritual Overhaul */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold">The Ritual Overhaul</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Zuri is 100% Volcanic Arabica (Bourbon & Kent varieties), meticulously hand-harvested at 1,400m–1,800m in the Tanzanian Highlands. It is roasted with mathematical precision to preserve its smooth, naturally rich profile, and delivered to you on autopilot.
          </p>
        </motion.div>

        {/* Transparent Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="space-y-8"
        >
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">TRANSPARENT PRICING</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="gradient-text">UNBEATABLE VALUE</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass border-premium rounded-2xl p-6 space-y-4"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white">The Ritual Starter (250g)</h3>
              <p className="text-3xl font-bold text-zuri-orange">R140 / month</p>
              <p className="text-sm text-gray-300">
                Saves R10 off retail price. Perfect for weekend brewers or casual drinkers.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">~30 cups per bag</span>
                </p>
                <p className="text-sm text-gray-400">
                  Less than <span className="text-zuri-orange font-bold">R5.00 per cup</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass border-premium rounded-2xl p-6 space-y-4"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white">The Half-Kilo Stack (500g)</h3>
              <p className="text-3xl font-bold text-zuri-orange">R235 / month</p>
              <p className="text-sm text-gray-300">
                Saves R15 off retail price. Perfect for daily drinkers who brew a cup or two every morning.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">~60 cups per bag</span>
                </p>
                <p className="text-sm text-gray-400">
                  Less than <span className="text-zuri-orange font-bold">R4.00 per cup</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Per-Cup Reality Check */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass border-premium rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">The Per-Cup Reality Check</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              At R140 for a 250g bag, you are paying <strong className="text-zuri-orange">less than R5.00 a cup</strong> for elite, luxury single-origin coffee. Compare that to the R35–R45 you pay for a single takeaway cappuccino in Bloemfontein.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-2xl font-bold text-zuri-orange">R5.00</p>
                <p className="text-xs text-gray-400">Zuri per cup</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-2xl font-bold text-gray-400">R40.00</p>
                <p className="text-xs text-gray-400">Takeaway average</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tribe Perks */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative bg-zuri-orange rounded-2xl p-8 sm:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zuri-orange via-orange-600 to-orange-700 opacity-90" />
          <div className="relative z-10">
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.25em] text-white/80 mb-2">THE TRIBE PERKS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                EXCLUSIVE BENEFITS
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-white">Workplace/Event Voucher</h3>
                <p className="text-sm text-white/90">
                  If your company is a Zuri partner, get <strong>20% off your first 3 months</strong> and <strong>10% lifetime discount</strong> while employed there.
                </p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-white">Merchandise Loop</h3>
                <p className="text-sm text-white/90">
                  Automatic <strong>10% off all Zuri individual orders</strong> and high-end merchandise/apparel drops.
                </p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-5 space-y-2">
                <h3 className="text-lg font-bold text-white">VIP Pipeline</h3>
                <p className="text-sm text-white/90">
                  Early-access whitelisting for upcoming product launches, including <strong>Zuri canned beverage drops</strong> before public shelves.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Frictionless Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="space-y-8"
        >
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">FRICTIONLESS LOGISTICS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="gradient-text">ZERO EFFORT</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass border-premium rounded-2xl p-6 space-y-4"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white">No Fancy Gear Needed</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We custom-grind beans to match whatever you use at home—French press, drip filter, espresso maker, or moka pot. Or order whole beans if you have a grinder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass border-premium rounded-2xl p-6 space-y-4"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white">100% Control</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Securely tokenized recurring payments. No rigid contracts. Pause, adjust bag sizes, skip a month, or cancel with a single tap in your dashboard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass border-premium rounded-2xl p-6 space-y-4"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-fuchsia-500 to-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white">Free Local Drop</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Freshly roasted and hand-delivered directly to your doorstep or office desk in Bloemfontein completely free of charge.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Subscription Form */}
        <motion.div
          id="subscription-form"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-6"
        >
          {!submitted ? (
            <>
              <div className="text-center space-y-4">
                <p className="text-xs tracking-[0.25em] text-zuri-orange">START YOUR SUBSCRIPTION</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">JOIN THE TRIBE</h2>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                  Choose your stack and we'll deliver elite Tanzanian coffee to your door.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Choose Your Subscription
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '250g', label: 'Ritual Starter (250g) - R140/mo' },
                      { value: '500g', label: 'Half-Kilo Stack (500g) - R235/mo' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSubscriptionType(option.value)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          subscriptionType === option.value
                            ? 'bg-zuri-orange text-white glow-orange-sm'
                            : 'bg-white/5 border border-white/10 text-gray-300 hover:border-zuri-orange/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 mt-2">
                    <p className="text-sm text-gray-400">
                      Estimated cups per month: <span className="text-zuri-orange font-bold">{cupsPerMonth}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Cost per cup: <span className="text-zuri-orange font-bold">R{pricePerCup.toFixed(2)}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Grind Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'whole-bean', label: 'Whole Bean' },
                      { value: 'french-press', label: 'French Press' },
                      { value: 'drip-filter', label: 'Drip Filter' },
                      { value: 'espresso', label: 'Espresso' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setGrindType(option.value)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          grindType === option.value
                            ? 'bg-zuri-orange text-white glow-orange-sm'
                            : 'bg-white/5 border border-white/10 text-gray-300 hover:border-zuri-orange/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+27 82 553 8183"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
                >
                  START SUBSCRIPTION
                </button>
              </form>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className="text-sm text-gray-400 text-center">Or contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:hello@bezuri.co.za"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    hello@bezuri.co.za
                  </a>
                  <a
                    href="tel:+27825538183"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    +27(82)-553-8183
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-5xl">✨</div>
              <h3 className="text-2xl font-bold">Request Received!</h3>
              <p className="text-gray-400">
                We'll review your subscription request and get back to you within 24-48 hours to set up your delivery.
              </p>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className="text-sm text-gray-400 text-center">Need to reach us sooner?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:hello@bezuri.co.za"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    hello@bezuri.co.za
                  </a>
                  <a
                    href="tel:+27825538183"
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    +27(82)-553-8183
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
