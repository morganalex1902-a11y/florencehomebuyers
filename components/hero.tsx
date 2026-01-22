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
      className='min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white px-4 py-20'
    >
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center space-y-8'>
          {/* Main Heading */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance'>
            Sell My House Fast <span className='text-emerald-600'>Huntsville</span>
          </h1>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800'>
            We Buy Houses Huntsville, Alabama
          </h2>

          {/* Subheading */}
          <p className='text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance'>
            Get A Fair Cash Offer From A Trusted Local Huntsville Cash Home Buyer – Sell On The Date You Pick.{' '}
            <span className='font-bold text-emerald-600'>100% FREE!</span>
          </p>

          {/* Key Benefits */}
          <div className='grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-6'>
            <div className='flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
              <Check className='w-5 h-5 text-emerald-600 mt-1 flex-shrink-0' />
              <p className='text-sm text-gray-700 font-medium'>
                Sell Your House As-Is In Huntsville And Pay No Agent Fees
              </p>
            </div>
            <div className='flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
              <Check className='w-5 h-5 text-emerald-600 mt-1 flex-shrink-0' />
              <p className='text-sm text-gray-700 font-medium'>
                Don't Worry About Cleaning Up or Repairing Anything
              </p>
            </div>
          </div>

          {/* Description */}
          <p className='text-lg text-gray-700 max-w-2xl mx-auto font-medium'>
            We solve problems – <span className='font-bold'>fast, easy, hassle-free</span>. Trusted local buyers by Jeffreys Residences.
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
              ⭐⭐⭐⭐⭐ Trusted by hundreds of Huntsville homeowners
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
