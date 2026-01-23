'use client'

import { useEffect, useRef } from 'react'

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('[data-animate]')
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

  const steps = [
    {
      number: '01',
      title: 'Tell Us About Your Property',
      description: 'Provide basic information about your home including its location, condition, and any special circumstances.'
    },
    {
      number: '02',
      title: 'It meets our purchasing criteria',
      description: 'We review your property details and determine if it\'s a good fit for our buying program.'
    },
    {
      number: '03',
      title: 'We\'ll present you with a written offer',
      description: 'Get a fair cash offer within 24 hours with no obligation. Review the terms at your own pace.'
    },
    {
      number: '04',
      title: 'We close at a local title company',
      description: 'Close on your timeline. We handle all costs and paperwork for a smooth, fast transaction.'
    },
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            Selling Your House Can Be A Quick And Simple Process
          </h2>
        </div>

        <div className='grid md:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          {steps.map((step, index) => (
            <div
              key={index}
              data-animate
              className='opacity-0 bg-red-700 hover:bg-red-800 rounded-lg p-6 text-white transition-all duration-300 hover:-translate-y-1 shadow-lg'
            >
              <div className='text-5xl font-bold text-red-200 mb-4'>
                {step.number}
              </div>
              <h3 className='text-lg font-bold text-white mb-3'>{step.title}</h3>
              <p className='text-red-50 leading-relaxed text-sm'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
