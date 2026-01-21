'use client'

import { Phone, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const PHONE_NUMBER = '+92 321 1234567'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approximately 700px)
      setIsVisible(window.scrollY > 700)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-2xl animate-fade-in-up'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex gap-3'>
          {/* Phone CTA */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors'
          >
            <Phone className='w-5 h-5' />
            <span className='hidden sm:inline'>Call Now</span>
          </a>

          {/* Form CTA */}
          <button className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors'>
            <span>Get Offer</span>
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  )
}
