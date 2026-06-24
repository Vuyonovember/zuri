'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    label: 'LIQUID GLASS SCROLL',
    title: 'The page doesn\'t move. It flows.',
    body: 'As you move, Zuri shifts from OLED black into deep Tanzanian sunset purples. Sections fade, slide, and bounce with premium restraint instead of cheap pop-ins.',
  },
  {
    label: 'STEVE JOBS HEADER',
    title: 'Glassmorphism with intent detection.',
    body: 'The navigation hides the noise and reveals itself only when you show intent: scrolling, hovering, or hunting. The logo stays pure, unbothered, and iconic.',
  },
  {
    label: 'LIQUID DEATH FOOTER',
    title: 'Join the cult. Read the legal crap.',
    body: 'No corporate disclaimers. You get Join the Cult, Legal Crap, and Your Soul Is Safe. A countdown clock to the next Zuri-Con makes every visit feel time-sensitive.',
  },
]

export default function Experience() {
  return (
    <section className="relative py-20 md:py-24 bg-zuri-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-3">
            THE INSANE EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built to feel like a portal,
            <span className="block gradient-text">not a product page.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Every scroll, hover, and click is engineered to feel heavy, deliberate, and premium, like Liquid Death crashed into an Apple keynote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass border-premium rounded-2xl p-6 sm:p-7 text-left flex flex-col gap-3 cursor-pointer"
            >
              <p className="text-[0.65rem] tracking-[0.25em] text-zuri-orange">
                {exp.label}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {exp.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
