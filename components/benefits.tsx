'use client'

import { Check, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { QuickCaptureForm } from './quick-capture-form'

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
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
              Benefits of Selling Your House to{' '}
              <span className='text-emerald-600'>Florence Home Buyers</span>
            </h2>
            <p className='text-xl text-gray-700 font-medium'>
              <span className='text-emerald-600 font-bold'>No fees, no commissions, quick hassle-free closing.</span>
            </p>
          </div>

          {/* Comparison Cards */}
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Our Program */}
            <div className='bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow'>
              <h3 className='text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-2'>
                <Check className='w-7 h-7' />
                Our Cash Offer Program
              </h3>
              <ul className='space-y-4'>
                {ourBenefits.map((benefit, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <Check className='w-5 h-5 text-emerald-600 mt-1 flex-shrink-0' />
                    <span className='text-gray-800 font-medium'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional Way */}
            <div className='bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow'>
              <h3 className='text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2'>
                <X className='w-7 h-7' />
                The Traditional Way / Agent
              </h3>
              <ul className='space-y-4'>
                {traditionalWayProblems.map((problem, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <X className='w-5 h-5 text-red-600 mt-1 flex-shrink-0' />
                    <span className='text-gray-800 font-medium'>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Capture Form */}
          <div className='max-w-2xl mx-auto mb-12'>
            <QuickCaptureForm />
          </div>

          {/* CTA */}
          <div className='text-center'>
            <p className='text-gray-600 mb-6'>Or dive deeper into our process:</p>
            <button className='px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg text-lg'>
              See Our Full Process
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
