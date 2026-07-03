'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { products, getProductByKey } from '@/data/products'

interface ProductPageProps {
  params: Promise<{
    key: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { key } = use(params)
  const [selectedSize, setSelectedSize] = useState(0)
  const [showCupsTooltip, setShowCupsTooltip] = useState(false)

  const product = getProductByKey(key)

  if (!product) {
    notFound()
  }

  const others = products.filter((p) => p.key !== product.key)
  const sizes = product.sizes || []
  const currentSize = sizes[selectedSize]
  const displayPrice = currentSize ? `R${currentSize.price}` : product.price

  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-zuri-orange uppercase">
              {product.key === 'beans' ? 'ZURI WHOLE BEAN' : 'ZURI COLD BREW'} · {currentSize?.size || product.size.toUpperCase()}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl">
              {product.vibe}
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="text-sm text-gray-400">Launch price</p>
            <p className="text-3xl font-bold text-zuri-orange">{displayPrice}</p>
            {currentSize && (
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>~{currentSize.cups} cups</span>
                <button
                  onMouseEnter={() => setShowCupsTooltip(true)}
                  onMouseLeave={() => setShowCupsTooltip(false)}
                  className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-300 hover:bg-white/20 transition-colors"
                >
                  i
                </button>
                {showCupsTooltip && (
                  <div className="absolute bg-zuri-purple border border-white/20 rounded-lg p-3 text-xs text-gray-300 max-w-xs z-10">
                    <p className="font-semibold mb-1">Cup Calculation</p>
                    <p>Based on ~15g of coffee per cup for filter/drip brewing. Actual cups may vary based on brewing method and personal preference.</p>
                  </div>
                )}
              </div>
            )}
            <Link
              href="/products"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-zuri-orange transition-colors"
            >
              ← Back to all products
            </Link>
          </div>
        </header>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] items-start">
          {/* Copy / spec column */}
          <div className="space-y-6">
            {/* Size Selector for beans */}
            {product.key === 'beans' && sizes.length > 0 && (
              <div className="glass border-premium rounded-2xl p-6 sm:p-7 space-y-4">
                <p className="text-xs font-semibold text-zuri-orange tracking-[0.2em] mb-1">
                  SELECT SIZE
                </p>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(index)}
                      className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                        selectedSize === index
                          ? 'bg-zuri-orange text-white glow-orange-sm'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="glass border-premium rounded-2xl p-6 sm:p-7 space-y-3">
              <p className="text-xs font-semibold text-zuri-orange tracking-[0.2em] mb-1">
                THE SPEC
              </p>
              <p className="text-sm sm:text-base text-gray-300">{product.spec}</p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 sm:p-7 space-y-3">
              <p className="text-xs font-semibold text-zuri-orange tracking-[0.2em] mb-1">
                SENSORY PROFILE
              </p>
              <p className="text-sm sm:text-base text-gray-300">{product.sensory}</p>
            </div>

            <div className="glass border-premium rounded-2xl p-6 sm:p-7 space-y-3 text-sm sm:text-base text-gray-300">
              <p className="text-xs font-semibold text-zuri-orange tracking-[0.2em] mb-1">
                {product.key === 'beans' ? 'BREWING METHODS' : 'HOW TO DEPLOY'}
              </p>
              <p>
                {product.key === 'beans' 
                  ? 'Perfect for espresso, pour-over, moka pot, or French press. Grind fresh for each brew to unlock the full flavor profile.'
                  : 'Use it as a modular piece of your day. Stack it before deep work, after training, or as a late night ritual when you still need a sharp brain without a heavy sit-down coffee.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                className="inline-flex items-center justify-center px-8 py-3 bg-zuri-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm"
              >
                ADD TO CART
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-gray-200 font-bold rounded-lg hover:bg-white/5 transition-all duration-300">
                VIEW NUTRITION FACTS (SOON)
              </button>
            </div>
          </div>

          {/* Image column */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[3/4]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="glass border-premium rounded-2xl p-4 text-xs text-gray-400 space-y-1">
              <p className="font-semibold tracking-[0.18em] text-zuri-orange">WHY THIS EXISTS</p>
              <p>
                {product.key === 'beans'
                  ? 'This is the cornerstone of the Zuri ecosystem. Before the cans, before the merchandise, there is the raw, pure bean. A declaration of pure coffee authority.'
                  : 'Each can is built to feel like a collectible artifact, not a commodity drink. This page is the dossier for this specific flavour in the Zuri arsenal.'}
              </p>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="text-xs tracking-[0.25em] text-zuri-orange">THE REST OF THE ARSENAL</p>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {product.key === 'beans' ? 'Explore the cans.' : 'Switch flavours, keep the world.'}
                </h2>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                {product.key === 'beans' 
                  ? 'Explore the ready-to-drink cold brew collection. Mix profiles for energy, decadence, smooth flow, or pure power.'
                  : 'Explore the other cans in the system. Mix profiles for energy, decadence, smooth flow, or pure power.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {others.map((other) => (
                <Link
                  key={other.id}
                  href={`/products/${other.key}`}
                  className="glass border-premium rounded-2xl p-4 flex flex-col gap-3 hover:border-zuri-orange/60 transition-colors"
                >
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white/5">
                    <Image src={other.image} alt={other.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 uppercase tracking-[0.18em]">
                      {other.key === 'beans' ? 'ZURI WHOLE BEAN' : 'ZURI COLD BREW'}
                    </p>
                    <p className="text-sm font-semibold text-white">{other.name}</p>
                    <p className="text-sm font-bold text-zuri-orange">{other.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>

      <Footer />
    </main>
  )
}
