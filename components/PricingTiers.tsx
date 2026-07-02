'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function PricingTiers() {
  const [activeTab, setActiveTab] = useState<'individual' | 'workplace'>('individual')
  const [sliderValue, setSliderValue] = useState(0.25)
  const [customWeight, setCustomWeight] = useState('')
  const [rentMachine, setRentMachine] = useState(false)
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

  const calculateWorkplacePrice = (kg: number) => {
    return {
      regular: Math.round(kg * 350),
      subscription: Math.round(kg * 350),
    }
  }

  const currentPrice = activeTab === 'individual' 
    ? calculateIndividualPrice(sliderValue)
    : calculateWorkplacePrice(sliderValue)

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
    // Assuming ~10g per cup for espresso, ~15g for filter
    const cupsPerKg = 67 // ~15g per cup
    return Math.round(kg * cupsPerKg)
  }

  const handleEnquireClick = () => {
    setShowEnquiryModal(true)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/pricing-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tab: activeTab,
          weight: sliderValue,
          rentMachine,
          price: currentPrice.subscription,
          cups: activeTab === 'workplace' ? calculateCups(sliderValue) : null,
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
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">COFFEE ON AUTO PILOT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">CHOOSE YOUR STACK</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Calculate your monthly coffee needs and see your subscription savings.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => { setActiveTab('individual'); setSliderValue(0.25) }}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === 'individual'
                ? 'bg-zuri-orange text-white glow-orange-sm'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            INDIVIDUAL
          </button>
          <button
            onClick={() => { setActiveTab('workplace'); setSliderValue(5) }}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === 'workplace'
                ? 'bg-zuri-orange text-white glow-orange-sm'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            WORKPLACE
          </button>
        </div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass border-premium rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                src={activeTab === 'individual' 
                  ? '/webimages/EFB87B04-98A0-4E8A-A9DF-6128DA4F26DC.png'
                  : '/partnerpage/01F85AA9-8222-4479-97C2-5CFC54035C7C.png'
                }
                alt={activeTab === 'individual' ? 'Individual Coffee' : 'Workplace Coffee'}
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
                    {activeTab === 'individual' ? 'Monthly Consumption' : 'Monthly Volume'}
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
                  min={activeTab === 'individual' ? 0.25 : 5}
                  max={activeTab === 'individual' ? 5 : 50}
                  step={getSliderStep()}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-zuri-orange"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{activeTab === 'individual' ? '250g' : '5kg'}</span>
                  <span>{activeTab === 'individual' ? '5kg+' : '50kg+'}</span>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeTab === 'workplace' ? (
                  <div className="bg-white/5 rounded-xl p-6 space-y-2">
                    <p className="text-sm text-gray-400">Estimated Cups</p>
                    <p className="text-3xl font-bold text-white">{calculateCups(sliderValue)}</p>
                    <p className="text-xs text-gray-500">cups per month</p>
                  </div>
                ) : (
                  <div className="bg-white/5 rounded-xl p-6 space-y-2">
                    <p className="text-sm text-gray-400">One-Time Purchase</p>
                    <p className="text-3xl font-bold text-white">R{currentPrice.regular}</p>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>
                )}
                <div className="bg-zuri-orange/10 border border-zuri-orange/30 rounded-xl p-6 space-y-2 relative">
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

              {/* Coffee Machine Rental */}
              <div className="flex  items-center gap-3">
                <input
                  type="checkbox"
                  id="rentMachine"
                  checked={rentMachine}
                  onChange={(e) => setRentMachine(e.target.checked)}
                  className="w-5 h-5 accent-zuri-orange cursor-pointer"
                />
                <label htmlFor="rentMachine" className="text-sm text-gray-300 cursor-pointer">
                  I want to rent a coffee machine
                </label>
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
      </div>

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
                  {activeTab === 'individual' ? 'Individual' : 'Workplace'} - {formatWeight(sliderValue)}/month
                  {activeTab === 'workplace' && ` (${calculateCups(sliderValue)} cups)`}
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
                      <span className="text-white">{activeTab === 'individual' ? 'Individual' : 'Workplace'}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Volume:</span>
                      <span className="text-white">{formatWeight(sliderValue)}/month</span>
                    </div>
                    {activeTab === 'workplace' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Cups:</span>
                        <span className="text-white">{calculateCups(sliderValue)}/month</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Machine Rental:</span>
                      <span className="text-white">{rentMachine ? 'Yes' : 'No'}</span>
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
  )
}
