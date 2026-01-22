'use client'

import { Phone, Check } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const PHONE_NUMBER = '(720) 456-7890'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-emerald-50 to-white px-4 py-20'
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/8482895/pexels-photo-8482895.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='absolute inset-0 bg-black/40'></div>
      <div className='container mx-auto max-w-4xl relative z-10'>
        <div className='text-center space-y-8'>
          {/* Main Heading */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance drop-shadow-lg'>
            Sell Your House <span className='text-emerald-300'>Hassle-Free</span>
          </h1>
          <h2 className='text-2xl sm:text-3xl font-bold text-white drop-shadow-lg'>
            Fast Cash Offers from Florence Home Buyers
          </h2>

          {/* Subheading */}
          <p className='text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed text-balance drop-shadow-lg'>
            Get a Fair Cash Offer Within 24 Hours – Sell On Your Terms.{' '}
            <span className='font-bold text-emerald-300'>100% FREE!</span>
          </p>

          {/* Key Benefits */}
          <div className='grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-6'>
            <div className='flex items-start gap-3 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-emerald-100'>
              <Check className='w-5 h-5 text-emerald-600 mt-1 flex-shrink-0' />
              <p className='text-sm text-gray-700 font-medium'>
                Sell Your House As-Is With No Agent Fees
              </p>
            </div>
            <div className='flex items-start gap-3 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-emerald-100'>
              <Check className='w-5 h-5 text-emerald-600 mt-1 flex-shrink-0' />
              <p className='text-sm text-gray-700 font-medium'>
                No Repairs Needed – We Handle Everything
              </p>
            </div>
          </div>

          {/* Description */}
          <p className='text-lg text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-lg'>
            We solve problems – <span className='font-bold'>fast, easy, hassle-free</span>. By Jeffreys Residences.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-8'>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className='flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg text-lg'
            >
              <Phone className='w-6 h-6' />
              {PHONE_NUMBER}
            </a>
            <button className='px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg text-lg'>
              Get Free Offer Today
            </button>
          </div>

          {/* Trust Badge */}
          <div className='pt-8'>
            <p className='text-sm text-gray-600 font-medium'>
              ⭐⭐⭐⭐⭐ Trusted by hundreds of satisfied homeowners
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
