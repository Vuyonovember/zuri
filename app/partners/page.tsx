'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PartnersPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [employees, setEmployees] = useState(10)
  const [cupsPerDay, setCupsPerDay] = useState(2)
  const [daysPerWeek, setDaysPerWeek] = useState(5)
  const [includeMachine, setIncludeMachine] = useState(false)
  const [comments, setComments] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [industry, setIndustry] = useState('office')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          employees,
          cupsPerDay,
          daysPerWeek,
          includeMachine,
          comments,
          industry,
        }),
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
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
            FOR WORKPLACES
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            FUEL YOUR TEAM'S PRODUCTIVITY
            <span className="block gradient-text">ELEVATE CLIENT EXPERIENCE</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Premium, barista-grade office coffee subscriptions <strong className="text-zuri-orange">without</strong> complex contracts or stale supermarket beans.
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
            alt="Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Solutions Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">THE SOLUTIONS MATRIX</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="gradient-text">INDUSTRY DOESN'T MATTER</span>
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
              <h3 className="text-xl font-bold text-white">Corporate Office Subscriptions</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Keep your team operating at 10/10. Automated, fresh monthly drops of whole bean coffee tailored perfectly to your staff volume.
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
              <h3 className="text-xl font-bold text-white">Boutique Retail & Hospitality</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Elevate customer retention. Perfect for law firms, high-end hair salons, luxury clinics, and guesthouses who refuse to serve low-grade commercial brands to their clients.
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
              <h3 className="text-xl font-bold text-white">High-Volume Events & Catering</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Partner with the Tribe for high-visibility deployments. Custom setups, co-branded marketing assets, and a massive secondary subscription revenue stream for event coordinators.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Tribe Perks - Electric Orange Section */}
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
                EXTRAORDINARY TEAM VALUE
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: '20% OFF // THE KICKSTART', body: 'Staff get 20% off first 3 months of individual home subscriptions.' },
                { title: '10% LIFETIME // LOCK IN', body: '10% lifetime discount on personal subscriptions while your company partners with Zuri.' },
                { title: 'UNO CARDS // CULTURE', body: 'Random partners receive Zuri UNO card games for breakroom culture.' },
                { title: 'TRIBE GIVEAWAYS', body: 'Quarterly draws for premium collaborative gear and experiences.' },
                { title: 'PRIORITY SUPPORT', body: 'Dedicated support for all corporate partners with fast response times.' },
                { title: 'FREE DELIVERY', body: 'Complimentary delivery across Bloemfontein for all corporate orders.' },
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

        {/* Secondary Image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-[21/9]"
        >
          <Image
            src="/partnerpage/59B111FE-83B8-4B57-86D1-6F2688980B50.png"
            alt="Partnership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">⭐️ WHAT THE TRIBE IS SAYING</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="gradient-text">PARTNER STORIES</span>
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
              <p className="text-lg font-bold text-white">"Our corporate clients refuse to drink anything else."</p>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We swapped out our traditional corporate coffee service for the Zuri 1KG Wholesale Stack. Our clients comment on the volcanic Tanzanian roast in every single boardroom meeting, and the team productivity speaks for itself."
              </p>
              <p className="text-sm text-zuri-orange font-semibold">Managing Director, Premium Law Firm, Brandwag</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass border-premium rounded-2xl p-6 space-y-4"
            >
              <p className="text-lg font-bold text-white">"The ultimate weekend event asset."</p>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "Integrating Zuri's premium coffee profiles into our catering fleet completely transformed our beverage options. Low friction, elite packaging, absolute mastery."
              </p>
              <p className="text-sm text-zuri-orange font-semibold">Lead Event Curator, Boutique Catering Co.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="space-y-8"
        >
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">❓ THE NO-NONSENSE B2B FAQ</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="gradient-text">GOT QUESTIONS?</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="glass border-premium rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">How do we know how many kilograms our office actually needs?</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We've made it completely foolproof with our interactive slider below. As a quick baseline rule of thumb: a standard 250g bag brews roughly 25 to 30 cups of coffee. If you have a small office of 5 to 8 daily coffee consumers, the <strong>1KG Monthly Tier</strong> is your perfect sweet spot. For larger corporate hubs, law firms, or showrooms, our <strong>Wholesale Tier</strong> ensures you never run dry.
              </p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">How do we get started?</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Simply submit an enquiry with your office details. We'll calculate your monthly volume needs and provide a custom quote. No setup costs, no contracts, no pressure.
              </p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">How does delivery work in Bloemfontein?</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Because we are focused on dominating our home turf first, <strong>all corporate and wholesale deliveries across Bloemfontein are completely free</strong>, managed directly by our team, and scheduled precisely so your breakroom is restocked before your current supply runs out.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partnership Form */}
        <motion.div
          id="partnership-form"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-6"
        >
          {!submitted ? (
            <>
              <div className="text-center space-y-4">
                <p className="text-xs tracking-[0.25em] text-zuri-orange">THE INTERACTIVE CALCULATOR & ORDER ENGINE</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">CHOOSE YOUR STACK</h2>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                  Tell us about your office needs and we'll create a custom coffee solution for you.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto px-4 sm:px-0">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Choose Your Industry
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'office', label: 'Office / Corporate' },
                      { value: 'hospitality', label: 'Guesthouse / Hospitality' },
                      { value: 'events', label: 'Event Catering / Wedding' },
                      { value: 'retail', label: 'Retail / Barber / Salon' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setIndustry(option.value)}
                        className={`px-3 sm:px-4 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                          industry === option.value
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
                    placeholder="john@company.com"
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

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Number of Employees
                  </label>
                  <div className="flex gap-4 items-center">
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-zuri-orange"
                    />
                    <input
                      type="number"
                      min="1"
                      max="500"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value) || 1)}
                      className="w-20 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:border-zuri-orange transition-colors"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1</span>
                    <span>500</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Cups per Day (per employee)
                  </label>
                  <div className="flex gap-4 items-center">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={cupsPerDay}
                      onChange={(e) => setCupsPerDay(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-zuri-orange"
                    />
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={cupsPerDay}
                      onChange={(e) => setCupsPerDay(parseInt(e.target.value) || 1)}
                      className="w-20 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:border-zuri-orange transition-colors"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Days per Week at Office
                  </label>
                  <div className="flex gap-4 items-center">
                    <input
                      type="range"
                      min="1"
                      max="7"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-zuri-orange"
                    />
                    <input
                      type="number"
                      min="1"
                      max="7"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(parseInt(e.target.value) || 1)}
                      className="w-20 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:border-zuri-orange transition-colors"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1</span>
                    <span>7</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Any special requests or additional information..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors resize-none"
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeMachine}
                    onChange={(e) => setIncludeMachine(e.target.checked)}
                    className="w-5 h-5 accent-zuri-orange rounded"
                  />
                  <span className="text-sm text-gray-300">
                    Include coffee machine rental
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
                >
                  SUBMIT ENQUIRY
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
                We'll review your needs and get back to you within 24-48 hours with a custom partnership proposal.
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
