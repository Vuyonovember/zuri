'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-zuri-black">
      <Navbar />

      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-4"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange">
            THE FINE PRINT
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Legal Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            The boring but necessary stuff. We keep it simple so you can get back to the coffee.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="glass border-premium rounded-2xl p-6 sm:p-8 space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Terms of Service</h2>
            <p className="text-sm sm:text-base text-gray-300">
              By accessing and using the Zuri website and services, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Zuri reserves the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Privacy Policy</h2>
            <p className="text-sm sm:text-base text-gray-300">
              We respect your privacy. We collect only the information necessary to provide our services and improve your experience. We do not sell your personal data to third parties.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Any information collected is used solely for order processing, customer support, and to enhance our services. Your data is stored securely and handled in accordance with applicable data protection laws.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Product Information</h2>
            <p className="text-sm sm:text-base text-gray-300">
              All product descriptions, images, and pricing are subject to change without notice. While we strive for accuracy, we do not warrant that product descriptions are error-free.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Colors may vary slightly due to monitor settings. All products are sold subject to availability.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Orders & Payments</h2>
            <p className="text-sm sm:text-base text-gray-300">
              All prices are in South African Rand (ZAR) unless otherwise stated. We reserve the right to refuse or cancel any order for any reason at any time.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Payment is required at the time of order. We accept various payment methods as indicated on our checkout page.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Returns & Refunds</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Due to the nature of our products, returns are generally not accepted unless the product is defective or damaged upon delivery. Contact us within 48 hours of delivery for any issues.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Refunds will be processed at our discretion and may be issued as store credit or back to the original payment method.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Intellectual Property</h2>
            <p className="text-sm sm:text-base text-gray-300">
              All content on this website, including text, graphics, logos, images, and software, is the property of Zuri or its content suppliers and is protected by intellectual property laws.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              You may not use, reproduce, or distribute any content from this website without prior written consent from Zuri.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Limitation of Liability</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Zuri shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Our total liability shall not exceed the amount you paid for the product or service in question.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-300">
              If you have any questions about these terms or our services, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-gray-300">
                Email: <a href="mailto:hello@bezuri.co.za" className="text-zuri-orange hover:underline">hello@bezuri.co.za</a>
              </p>
              <p className="text-sm sm:text-base text-gray-300">
                Phone: <a href="tel:+27825538183" className="text-zuri-orange hover:underline">+27(82)-553-8183</a>
              </p>
              <p className="text-sm sm:text-base text-gray-300">
                Instagram: <a href="https://instagram.com/@bezuri.co.za" target="_blank" rel="noopener noreferrer" className="text-zuri-orange hover:underline">@bezuri.co.za</a>
              </p>
            </div>
          </div>

          <div className="pt-4 text-xs text-gray-500">
            <p>Last updated: June 2026</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
