'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'TANZANIA HIGHLANDS',
    subtitle: 'The Agricultural Source',
    body: 'Our single-origin Arabica beans are meticulously cultivated at elevations ranging between 1,400 and 1,800 meters above sea level in the fertile highlands of Tanzania. Every single cherry is handpicked with absolute precision.',
    tag: '01 / THE CULTIVATION',
  },
  {
    title: 'MATATIELE',
    subtitle: 'The Ancestral Heritage',
    body: 'The heartbeat of Zuri is deeply anchored in South African soil. Our roots trace directly back to the rugged, breathtaking landscapes of Matatiele, tucked away in the mountain shadows near the Eastern Cape border.',
    tag: '02 / THE LINEAGE',
  },
  {
    title: 'BLOEMFONTEIN',
    subtitle: 'The Operational Hub',
    body: 'Every great movement needs a strategic headquarters. For Zuri, that crucible is Bloemfontein - the geographic heart of South Africa, a melting pot of academic brilliance and creative ambition.',
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
                <p className="text-sm text-gray-300 leading-relaxed">
                  {pillar.body}
                </p>
              </div>

              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
