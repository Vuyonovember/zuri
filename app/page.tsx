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

export default function Home() {
  const [showSoulContract, setShowSoulContract] = useState(false)

  const handleOpenSoulContract = () => {
    setShowSoulContract(true)
  }

  const handleExploreHunt = () => {
    const target = document.getElementById('hunt')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />
      <Hero
        onExecuteContract={handleOpenSoulContract}
        onExploreHunt={handleExploreHunt}
      />
      <Origin />
      <WholeBean />
      <Gallery />
      <Community />
      <BloemHunt />
      <Footer />
      {showSoulContract && (
        <SoulContract onClose={() => setShowSoulContract(false)} />
      )}
    </main>
  )
}
