'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'TANZANIA HIGHLANDS',
    subtitle: 'The Agricultural Source',
    points: [
      'Single-origin Arabica beans cultivated at 1,400-1,800m elevation',
      'Handpicked with absolute precision',
      'Fertile volcanic highlands of Tanzania',
    ],
    tag: '01 / THE CULTIVATION',
  },
  {
    title: 'MATATIELE',
    subtitle: 'The Ancestral Heritage',
    points: [
      'Deeply anchored in South African soil',
      'Roots trace to Matatiele landscapes',
      'Near Eastern Cape border mountains',
    ],
    tag: '02 / THE LINEAGE',
  },
  {
    title: 'BLOEMFONTEIN',
    subtitle: 'The Operational Hub',
    points: [
      'Strategic headquarters in geographic heart',
      'Melting pot of academic brilliance',
      'Creative ambition launchpad',
    ],
    tag: '03 / THE LAUNCHPAD',
  },
]

export default function Origin() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-gradient-to-b from-zuri-black via-zuri-purple/20 to-zuri-black"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top,_rgba(222,44,0,0.15),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(45,10,49,0.35),_transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-3">
            THE GEOGRAPHICAL ENGINE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            FROM TANZANIA TO SOUTH AFRICA.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Our journey begins on the high-altitude, volcanic slopes of East Africa, anchors in the Eastern Cape, and launches from the heart of South Africa. Three distinct locations, one unified movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass border-premium rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[260px]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.65rem] font-semibold tracking-[0.25em] text-zuri-orange">
                    {pillar.tag}
                  </span>
                  <span className="text-[0.65rem] text-gray-500 uppercase tracking-[0.2em]">
                    ZURI STACK 0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-[0.16em]">
                  {pillar.subtitle}
                </p>
                <ul className="text-sm text-gray-300 space-y-2">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zuri-orange mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
