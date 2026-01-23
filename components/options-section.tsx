'use client'

import { Clock, Home, AlertCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function OptionsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('[data-option]')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in-up')
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const options = [
    {
      icon: Clock,
      title: 'List with an Agent',
      description: 'Takes 45-90+ days to sell',
      points: [
        'Months of waiting and uncertainty',
        'Agent commissions (5-6%)',
        'Required to show and stage your home',
        'Closing costs paid by seller',
        'You handle repairs',
        'Lots of paperwork and inspections',
      ],
      highlight: false,
    },
    {
      icon: Home,
      title: 'Sell to Florence Home Buyers',
      description: 'We close in as little as 7 days',
      points: [
        'Offer within 24 hours',
        'Zero commission, zero fees',
        'No showings or staging needed',
        'We pay all closing costs',
        'We handle repairs',
        'Direct cash offer',
      ],
      highlight: true,
    },
    {
      icon: AlertCircle,
      title: 'Sell It Yourself',
      description: 'Save commission but lots of work',
      points: [
        'No agent commission',
        'Significant time investment',
        'Expensive marketing',
        'You handle all showings',
        'Closing costs paid by seller',
        'Legal and paperwork burden',
      ],
      highlight: false,
    },
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Selling To Florence Home Buyers vs The Alternatives
          </h2>
          <p className='text-xl text-gray-700'>
            See why Florence homeowners choose the cash buyer route.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {options.map((option, index) => {
            const Icon = option.icon
            return (
              <div
                key={index}
                data-option
                className={`opacity-0 p-8 rounded-xl border-2 transition-all ${
                  option.highlight
                    ? 'bg-emerald-50 border-emerald-300 shadow-xl relative'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {option.highlight && (
                  <div className='absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold'>
                    BEST OPTION
                  </div>
                )}

                <Icon
                  className={`w-8 h-8 mb-4 ${
                    option.highlight
                      ? 'text-emerald-600'
                      : 'text-gray-600'
                  }`}
                />
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  {option.title}
                </h3>
                <p className='text-gray-600 font-medium mb-6'>
                  {option.description}
                </p>

                <ul className='space-y-3'>
                  {option.points.map((point, i) => (
                    <li key={i} className='flex gap-3'>
                      {option.highlight ? (
                        <span className='text-emerald-600 font-bold flex-shrink-0'>
                          ✓
                        </span>
                      ) : (
                        <span className='text-gray-400 flex-shrink-0'>•</span>
                      )}
                      <span className='text-gray-700'>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className='text-center mt-12'>
          <button className='px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg text-lg'>
            Choose The Easy Way - Get My Cash Offer!
          </button>
        </div>
      </div>
    </section>
  )
}
