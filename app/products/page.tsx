'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { products } from '@/data/products'

export default function ProductsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 space-y-4"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange">
            COLD BREW ARSENAL
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Build your ritual.
            <span className="block gradient-text">Stack your Zuri cans.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Four flavours. One system. Each can is tuned for a different type of day, but all of
            them hit with Tanzanian single origin precision. Pick your starting point and build
            your own daily stack.
          </p>
        </motion.div>

        <div className="grid gap-10 md:gap-12">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
              className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-center glass border-premium rounded-2xl p-6 sm:p-8"
            >
              {/* Image column */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5 border border-white/10">
                  <Image
                    src={
                      hoveredId === product.id && product.hoverImage
                        ? product.hoverImage
                        : product.image
                    }
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
              </div>

              {/* Copy column */}
              <div className="space-y-4 md:space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-[0.25em] text-zuri-orange mb-1">ZURI COLD BREW</p>
                    <h2 className="text-2xl sm:text-3xl font-semibold">{product.name}</h2>
                  </div>
                  <div className="text-right sm:text-right">
                    <p className="text-sm text-gray-400">{product.size}</p>
                    <p className="text-2xl font-bold text-zuri-orange">{product.price}</p>
                  </div>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 whitespace-pre-line">
                  {product.tag}
                </p>

                <div className="space-y-3 text-sm sm:text-base text-gray-300">
                  <div>
                    <p className="text-xs font-semibold text-zuri-orange tracking-[0.18em] mb-1">
                      THE VIBE
                    </p>
                    <p>{product.vibe}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zuri-orange tracking-[0.18em] mb-1">
                      THE SPEC
                    </p>
                    <p>{product.spec}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zuri-orange tracking-[0.18em] mb-1">
                      SENSORY PROFILE
                    </p>
                    <p>{product.sensory}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-8 py-3 bg-gray-700 text-gray-400 font-bold rounded-lg cursor-not-allowed"
                  >
                    COMING SOON
                  </button>
                  <Link
                    href={`/products/${product.key}`}
                    className="inline-flex items-center justify-center px-8 py-3 border border-zuri-orange/60 text-zuri-orange font-bold rounded-lg hover:bg-zuri-orange/10 transition-all duration-300"
                  >
                    VIEW PRODUCT STORY
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
