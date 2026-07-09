'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function IndividualsPage() {
  const [sliderValue, setSliderValue] = useState(0.25)
  const [customWeight, setCustomWeight] = useState('')
  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const individualPricing = [
    { kg: 0.25, regular: 150, subscription: 140 },
    { kg: 0.5, regular: 250, subscription: 235 },
    { kg: 1, regular: 400, subscription: 380 },
  ]

  const calculateIndividualPrice = (kg: number) => {
    if (kg <= 0.25) {
      const tier = individualPricing.find(t => t.kg === 0.25)
      if (tier) {
        const ratio = kg / 0.25
        return {
          regular: Math.round(tier.regular * ratio),
          subscription: Math.round(tier.subscription * ratio),
        }
      }
    } else if (kg <= 0.5) {
      const tier = individualPricing.find(t => t.kg === 0.5)
      if (tier) {
        const ratio = kg / 0.5
        return {
          regular: Math.round(tier.regular * ratio),
          subscription: Math.round(tier.subscription * ratio),
        }
      }
    } else if (kg <= 1) {
      const tier = individualPricing.find(t => t.kg === 1)
      if (tier) {
        const ratio = kg / 1
        return {
          regular: Math.round(tier.regular * ratio),
          subscription: Math.round(tier.subscription * ratio),
        }
      }
    } else {
      const tier = individualPricing.find(t => t.kg === 1)
      if (tier) {
        const ratio = kg / 1
        return {
          regular: Math.round(tier.regular * ratio),
          subscription: Math.round(tier.subscription * ratio),
        }
      }
    }
    return { regular: 0, subscription: 0 }
  }

  const currentPrice = calculateIndividualPrice(sliderValue)
  const savings = currentPrice.regular - currentPrice.subscription

  const formatWeight = (kg: number) => {
    if (kg < 1) {
      return `${Math.round(kg * 1000)}g`
    }
    return kg % 1 === 0 ? `${kg}kg` : `${kg.toFixed(1)}kg`
  }

  const getSliderStep = () => {
    if (sliderValue < 1) return 0.25
    if (sliderValue < 5) return 1
    return 0.5
  }

  const handleCustomWeightChange = (value: string) => {
    setCustomWeight(value)
    const numValue = parseFloat(value)
    if (!isNaN(numValue) && numValue > 0) {
      const kgValue = value.includes('g') ? numValue / 1000 : numValue
      setSliderValue(kgValue)
    }
  }

  const calculateCups = (kg: number) => {
    const cupsPerKg = 67
    return Math.round(kg * cupsPerKg)
  }

  const handleEnquireClick = () => {
    setShowEnquiryModal(true)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/individual-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          weight: sliderValue,
          price: currentPrice.subscription,
          cups: calculateCups(sliderValue),
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setTimeout(() => {
          setShowEnquiryModal(false)
          setSubmitSuccess(false)
          setFormData({ name: '', email: '', phone: '' })
        }, 2000)
      } else {
        alert('Failed to submit enquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error)
      alert('Failed to submit enquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-zuri-orange/20 via-orange-600/10 to-orange-700/20 border border-zuri-orange/30 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
        >
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-orange-500 to-orange-400 mb-4" />
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
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-zuri-orange/20 via-orange-600/10 to-orange-700/20 border border-zuri-orange/30 rounded-2xl p-6 space-y-4 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-orange-500 to-orange-400 mb-4" />
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
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-zuri-orange/20 via-orange-600/10 to-orange-700/20 border border-zuri-orange/30 rounded-2xl p-6 space-y-4 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-orange-500 to-orange-400 mb-4" />
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
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-zuri-orange/20 via-orange-600/10 to-orange-700/20 border border-zuri-orange/30 rounded-2xl p-6 sm:p-8 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
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
              {[
                { title: 'Workplace/Event Voucher', body: 'If your company is a Zuri partner, get 20% off your first 3 months and 10% lifetime discount while employed there.' },
                { title: 'Merchandise Loop', body: 'Automatic 10% off all Zuri individual orders and high-end merchandise/apparel drops.' },
                { title: 'VIP Pipeline', body: 'Early-access whitelisting for upcoming product launches, including Zuri canned beverage drops before public shelves.' },
              ].map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/20 backdrop-blur-sm rounded-xl p-5 space-y-2 border border-zuri-orange/20 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-white">{perk.title}</h3>
                  <p className="text-sm text-white/90">{perk.body}</p>
                </motion.div>
              ))}
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
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-zuri-orange/20 via-orange-600/10 to-orange-700/20 border border-zuri-orange/30 rounded-2xl p-6 space-y-4 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-orange-500 to-orange-400 mb-4" />
              <h3 className="text-lg font-bold text-white">No Fancy Gear Needed</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Our whole bean coffee works with whatever you use at home—French press, drip filter, espresso maker, or moka pot.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-zuri-orange/20 via-orange-600/10 to-orange-700/20 border border-zuri-orange/30 rounded-2xl p-6 space-y-4 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-orange-500 to-orange-400 mb-4" />
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
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-zuri-orange/20 via-orange-600/10 to-orange-700/20 border border-zuri-orange/30 rounded-2xl p-6 space-y-4 hover:border-zuri-orange hover:glow-orange-sm transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-zuri-orange via-orange-500 to-orange-400 mb-4" />
              <h3 className="text-lg font-bold text-white">Free Local Drop</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Freshly roasted and hand-delivered directly to your doorstep or office desk in Bloemfontein completely free of charge.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Subscription Calculator */}
        <motion.div
          id="subscription-form"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass border-premium rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                src="/webimages/EFB87B04-98A0-4E8A-A9DF-6128DA4F26DC.png"
                alt="Individual Coffee"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Calculator Content */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center gap-4">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">
                    Monthly Consumption
                  </label>
                  <input
                    type="text"
                    value={customWeight || formatWeight(sliderValue)}
                    onChange={(e) => handleCustomWeightChange(e.target.value)}
                    onBlur={() => setCustomWeight('')}
                    placeholder="e.g., 500g or 2kg"
                    className="w-32 text-right text-2xl font-bold text-white bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:border-zuri-orange"
                  />
                </div>
                <input
                  type="range"
                  min={0.25}
                  max={5}
                  step={getSliderStep()}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-zuri-orange"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>250g</span>
                  <span>5kg+</span>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 space-y-2">
                  <p className="text-sm text-gray-400">Estimated Cups</p>
                  <p className="text-3xl font-bold text-white">{calculateCups(sliderValue)}</p>
                  <p className="text-xs text-gray-500">cups per month</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 space-y-2">
                  <p className="text-sm text-gray-400">One-Time Purchase</p>
                  <p className="text-3xl font-bold text-white">R{currentPrice.regular}</p>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
                <div className="bg-zuri-orange/10 border border-zuri-orange/30 rounded-xl p-6 space-y-2 relative md:col-span-2">
                  <p className="text-sm text-zuri-orange">Subscription Price</p>
                  <p className="text-3xl font-bold text-zuri-orange">R{currentPrice.subscription}</p>
                  <p className="text-xs text-gray-400">per month</p>
                  {savings > 0 && (
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      SAVE R{savings}
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleEnquireClick}
                className="w-full bg-zuri-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange text-lg"
              >
                ENQUIRE
              </button>
            </div>
          </div>
        </motion.div>

        {/* Enquiry Modal */}
        {showEnquiryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowEnquiryModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass border-premium rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Enquire Now</h3>
                  <p className="text-gray-400 text-sm">
                    Individual - {formatWeight(sliderValue)}/month ({calculateCups(sliderValue)} cups)
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white text-lg font-semibold">Enquiry Submitted!</p>
                    <p className="text-gray-400 text-sm mt-2">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zuri-orange"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zuri-orange"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zuri-orange"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 space-y-2">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Summary</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Type:</span>
                        <span className="text-white">Individual</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Volume:</span>
                        <span className="text-white">{formatWeight(sliderValue)}/month</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Cups:</span>
                        <span className="text-white">{calculateCups(sliderValue)}/month</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-zuri-orange">Price:</span>
                        <span className="text-zuri-orange">R{currentPrice.subscription}/month</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setShowEnquiryModal(false)}
                        className="flex-1 bg-white/10 text-white font-bold py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  )
}
