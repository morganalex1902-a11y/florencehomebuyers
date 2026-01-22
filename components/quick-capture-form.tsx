'use client'

import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

export function QuickCaptureForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      // In production, send to your backend/email service
      console.log('Email captured:', email)
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className='bg-gradient-to-r from-emerald-50 to-blue-50 border-l-4 border-emerald-600 p-6 rounded-r-lg'>
      {submitted ? (
        <div className='flex items-start gap-3'>
          <CheckCircle className='w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0' />
          <div>
            <p className='font-bold text-gray-900'>Almost done!</p>
            <p className='text-sm text-gray-600'>Check your email for your free offer valuation guide.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-3'>
          <p className='font-semibold text-gray-900'>Get Your Free Offer In Minutes</p>
          <p className='text-sm text-gray-700'>No credit check. No obligation. 100% free.</p>
          
          <div className='flex gap-2'>
            <div className='flex-1 relative'>
              <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500' />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='your@email.com'
                required
                className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm'
              />
            </div>
            <button
              type='submit'
              className='px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 whitespace-nowrap text-sm'
            >
              Get Offer
              <ArrowRight className='w-4 h-4' />
            </button>
          </div>
          
          <p className='text-xs text-gray-600'>
            ✓ Fast • ✓ Free • ✓ No spam
          </p>
        </form>
      )}
    </div>
  )
}
