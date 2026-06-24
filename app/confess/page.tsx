'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SoulContract from '@/components/SoulContract'

export default function ConfessPage() {
  const [openContract, setOpenContract] = useState(false)

  const handleOpen = () => setOpenContract(true)
  const handleClose = () => setOpenContract(false)

  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section
        id="contact"
        className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 space-y-4"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange">
            CONFESS TO US
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Tell us what keeps
            <br className="hidden sm:block" />
            <span className="gradient-text">you up at night.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            This isn&apos;t a polite contact form. It&apos;s a direct line to the people
            building Zuri. Confess your ideas, complaints, and obsessions so we can
            make the movement sharper.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          {/* Mobile: Image first, Desktop: Image second */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:hidden space-y-6 order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/webimages/AEC83A2D-55DF-4FC0-BE41-2B791653F9CD.png"
                alt="Confess to Zuri"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="glass border-premium rounded-2xl p-6 sm:p-7 text-left space-y-4">
              <p className="text-xs tracking-[0.25em] text-zuri-orange">THE CONTRACT</p>
              <h2 className="text-lg sm:text-xl font-semibold">How this works</h2>
              <p className="text-sm text-gray-300">
                Hit the button to open the Soul Contract. Drop your email and your
                confession. We&apos;ll reply when it actually moves the brand forward.
              </p>
              <p className="text-xs text-gray-500">
                No support tickets. No bots. Just the humans behind Zuri reading what
                you send.
              </p>
            </div>
          </motion.div>

          {/* Left: Interactive explanation / list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-5 order-2 md:order-1"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              What you can confess:
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300 text-left list-disc list-inside">
              <li>Ideas for the hunt, drops, or artifacts you wish existed.</li>
              <li>How you actually drink your coffee when no one is watching.</li>
              <li>What would make Zuri the only coffee you ever buy.</li>
            </ul>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              We read every confession. The sharpest ones shape the roadmap, early
              access, and who gets invited to future Zuri-Cons.
            </p>

            <button
              onClick={handleOpen}
              className="mt-4 inline-flex items-center justify-center px-8 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange w-full sm:w-auto"
            >
              EXECUTE YOUR CONFESSION
            </button>
          </motion.div>

          {/* Right: Image and contract info (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden md:block space-y-6 order-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
              <Image
                src="/webimages/AEC83A2D-55DF-4FC0-BE41-2B791653F9CD.png"
                alt="Confess to Zuri"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="glass border-premium rounded-2xl p-6 sm:p-7 text-left space-y-4">
              <p className="text-xs tracking-[0.25em] text-zuri-orange">THE CONTRACT</p>
              <h2 className="text-lg sm:text-xl font-semibold">How this works</h2>
              <p className="text-sm text-gray-300">
                Hit the button to open the Soul Contract. Drop your email and your
                confession. We&apos;ll reply when it actually moves the brand forward.
              </p>
              <p className="text-xs text-gray-500">
                No support tickets. No bots. Just the humans behind Zuri reading what
                you send.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {openContract && <SoulContract variant="confess" onClose={handleClose} />}
    </main>
  )
}
