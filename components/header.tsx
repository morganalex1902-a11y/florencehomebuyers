'use client'

import { useState, useEffect } from 'react'
import { Phone, Home } from 'lucide-react'

const PHONE_NUMBER = '+92 321 1234567'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-gradient-to-b from-white to-transparent py-6'
      }`}
    >
      <div className='container mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Home className='w-6 h-6 text-emerald-600' />
          <div className='flex flex-col'>
            <span className='font-bold text-sm text-gray-900'>Florence Home Buyers</span>
            <span className='text-xs text-gray-600'>by Jeffreys Residences</span>
          </div>
        </div>

        {/* Phone Number - Center/Right */}
        <div className='flex items-center gap-4 ml-auto'>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className='hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors'
          >
            <Phone className='w-5 h-5 text-blue-600 animate-pulse' />
            <span className='font-bold text-blue-600 text-lg'>{PHONE_NUMBER}</span>
          </a>

          {/* CTA Button */}
          <button className='px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg'>
            Get Free Offer
          </button>
        </div>
      </div>

      {/* Mobile Phone - if needed for small screens */}
      <div className='sm:hidden px-4 pt-3 text-center'>
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className='inline-flex items-center gap-2 font-bold text-blue-600 text-base hover:text-blue-700'
        >
          <Phone className='w-5 h-5' />
          {PHONE_NUMBER}
        </a>
      </div>
    </header>
  )
}
