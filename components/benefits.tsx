'use client'

import { Check, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function BenefitsSection() {
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

  const ourBenefits = [
    'Competitive cash offer within 24 hours',
    'No Showings – No Hassles',
    'You choose your closing day',
    'We pay ALL closing costs',
    'Zero fees. Zero commissions',
    'We\'ll cover any repairs',
  ]

  const traditionalWayProblems = [
    'Months it takes to sell add up',
    'Plenty of showings and disruption',
    'Takes forever to close',
    'Seller pays closing costs & commissions',
    'You could be on the hook for repairs',
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
              Benefits of Selling Your Florence House to{' '}
              <span className='text-red-600'>Florence Home Buyers</span>
            </h2>
            <p className='text-xl text-gray-700 font-medium'>
              <span className='text-red-600 font-bold'>No fees, no commissions, quick hassle-free closing.</span>
            </p>
          </div>

          {/* Comparison Cards */}
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Our Program */}
            <div className='rounded-xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
              {/* Image */}
              <div className='relative h-56 w-full'>
                <Image
                  src='https://images.pexels.com/photos/7414960/pexels-photo-7414960.jpeg'
                  alt='Happy family in their new home'
                  fill
                  className='object-cover'
                />
              </div>

              {/* Content */}
              <div className='bg-gradient-to-br from-red-50 to-red-100 p-8'>
                <h3 className='text-2xl font-bold text-red-700 mb-6 flex items-center gap-2'>
                  <Check className='w-7 h-7' />
                  Our Cash Offer Program
                </h3>
                <ul className='space-y-3'>
                  {ourBenefits.map((benefit, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <Check className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
                      <span className='text-gray-800 font-medium text-sm'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Traditional Way */}
            <div className='rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
              {/* Image */}
              <div className='relative h-56 w-full'>
                <Image
                  src='https://images.pexels.com/photos/8962573/pexels-photo-8962573.jpeg'
                  alt='Traditional real estate process'
                  fill
                  className='object-cover'
                />
              </div>
              
              {/* Content */}
              <div className='bg-gradient-to-br from-gray-50 to-red-50 p-8'>
                <h3 className='text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2'>
                  <X className='w-7 h-7' />
                  The Traditional Way / Agent
                </h3>
                <ul className='space-y-3'>
                  {traditionalWayProblems.map((problem, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
                      <span className='text-gray-800 font-medium text-sm'>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='text-center'>
            <button className='px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg hover:shadow-xl text-lg'>
              Yes! I Want My Fair Cash Offer!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
