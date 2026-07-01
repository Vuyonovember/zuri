'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SoulContract from '@/components/SoulContract'
import BloemHunt from '@/components/BloemHunt'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import Origin from '@/components/Origin'
import Community from '@/components/Community'
import WholeBean from '@/components/WholeBean'
import PricingTiers from '@/components/PricingTiers'
import ScrollingBanner from '@/components/ScrollingBanner'
import WhyZuri from '@/components/WhyZuri'

export default function Home() {
  const [showSoulContract, setShowSoulContract] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)

  const handleExploreHunt = () => {
    const target = document.getElementById('hunt')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubscribeToTribe = () => {
    setShowNewsletter(true)
  }

  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />
      <Hero
        onExploreHunt={handleExploreHunt}
        onJoinSubscription={handleSubscribeToTribe}
      />
      <ScrollingBanner />
      <PricingTiers />
      <Gallery />
      <WhyZuri />
      <Origin />
      <WholeBean />
      <Community />
      <BloemHunt />
      <Footer />
      {showSoulContract && (
        <SoulContract onClose={() => setShowSoulContract(false)} />
      )}
      {showNewsletter && (
        <SoulContract onClose={() => setShowNewsletter(false)} variant="newsletter" />
      )}
    </main>
  )
}
