'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
  confession: z.string().optional(),
})

type EmailFormData = z.infer<typeof emailSchema>

interface SoulContractProps {
  onClose: () => void
  variant?: 'waitlist' | 'confess' | 'newsletter'
}

export default function SoulContract({ onClose, variant = 'waitlist' }: SoulContractProps) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<EmailFormData>({
    defaultValues: { confession: '' },
  })

  const onSubmit = async (data: EmailFormData) => {
    try {
      if (variant === 'confess') {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Anonymous Confession',
            email: data.email,
            message: data.confession,
          }),
        })
      } else if (variant === 'newsletter') {
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
          }),
        })
      } else {
        await fetch('/api/hunt-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
          }),
        })
      }
      setSubmitted(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass border-premium rounded-2xl p-8 md:p-12 max-w-md w-full relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">
                  <span className="gradient-text">
                    {variant === 'confess' ? 'CONFESS TO ZURI' : variant === 'newsletter' ? 'JOIN THE TRIBE' : 'SELL YOUR SOUL'}
                  </span>
                </h2>
                <p className="text-gray-400 text-sm">
                  {variant === 'confess'
                    ? 'Drop your confession and email. This is a direct line to the team.'
                    : variant === 'newsletter'
                    ? 'Subscribe to get exclusive drops, cultural activations, and premium coffee updates.'
                    : 'to the movement. join the waitlist for exclusive access.'}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {variant === 'confess' && (
                  <div>
                    <textarea
                      {...register('confession', {
                        required: 'Please share your confession.',
                      })}
                      placeholder="Tell us what keeps you up at night..."
                      rows={4}
                      className="w-full mt-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-zuri-orange transition-colors resize-none"
                    />
                    {errors.confession && (
                      <p className="text-red-400 text-sm mt-1">{errors.confession.message}</p>
                    )}
                  </div>
                )}

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 accent-zuri-orange"
                  />
                  <span className="text-xs text-gray-400">
                    {variant === 'confess'
                      ? 'I understand this is a direct line to the team, not a mailing list.'
                      : variant === 'newsletter'
                      ? 'I agree to receive exclusive drops and updates from Zuri.'
                      : "I understand that by joining, I'm committing to excellence and refusing mediocrity."}
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-zuri-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 glow-orange-sm hover:glow-orange"
                >
                  {variant === 'newsletter' ? 'SUBSCRIBE' : 'EXECUTE CONTRACT'}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center">
                {variant === 'confess'
                  ? "This does not sign you up for anything. If we reply, it's because your confession actually hits."
                  : variant === 'newsletter'
                  ? "Join the tribe. Unsubscribe anytime."
                  : "YOUR SOUL IS SAFE. We'll never spam you."}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <div className="text-5xl">✨</div>
              <h3 className="text-2xl font-bold">
                {variant === 'confess' ? 'CONFESSION RECEIVED' : variant === 'newsletter' ? 'WELCOME TO THE TRIBE' : 'WELCOME TO THE CULT'}
              </h3>
              <p className="text-gray-400">
                {variant === 'confess'
                  ? "We read every confession. If yours sharpens the movement, we'll respond."
                  : variant === 'newsletter'
                  ? "You're now part of the Zuri tribe. Check your email for exclusive drops."
                  : "You're now part of something extraordinary. Check your email for exclusive details."}
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
