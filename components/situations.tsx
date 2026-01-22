'use client'

import { CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function SituationsSection() {
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

  const situations = [
    'Going through foreclosure or loan default',
    'Inherited an unwanted property or family dispute',
    'Need to relocate quickly (e.g., abroad for job)',
    'Frustrated with bad tenants or evictions',
    'Going through divorce or separation',
    'Own a vacant property',
    'Fixer-upper you don\'t want to repair',
    'Urgent sale for medical or financial reasons',
    'Stuck with a property needing major repairs',
    'Want to avoid lengthy legal processes',
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            We Can Buy Your House No Matter Your Reason For Selling
          </h2>
          <p className='text-xl text-gray-700 font-medium mb-4'>
            Are You In One Of These Situations?
          </p>
          <p className='text-gray-600 text-lg'>
            <span className='text-emerald-600 font-bold'>Get a free, no-obligation offer today.</span> We can often have an offer to you within 24 hours.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto'>
          {situations.map((situation, index) => (
            <div
              key={index}
              className='flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all opacity-0 animate-fade-in-up'
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CheckCircle className='w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0' />
              <p className='text-gray-700 font-medium'>{situation}</p>
            </div>
          ))}
        </div>

        <div className='text-center pt-12'>
          <button className='px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg text-lg'>
            Yes! I Want My Fair Cash Offer!
          </button>
        </div>
      </div>
    </section>
  )
}
