'use client'

import { Clock, Calendar, Handshake } from 'lucide-react'
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
      icon: Clock,
      title: 'Step 1: Get a Fair Offer',
      description:
        'Avoid the hassles of listing your house with our Cash Offer Program. In many cases, we can present you with a fair, all-cash offer in as little as 24 hours – no obligations, no fees.',
      image: 'https://images.pexels.com/photos/7578866/pexels-photo-7578866.jpeg',
    },
    {
      icon: Calendar,
      title: 'Step 2: Pick the Date',
      description:
        'Selling your house can be stressful. Have peace of mind by knowing all of your options to sell your house. We can even handle repairs for you!',
      image: 'https://images.pexels.com/photos/26571206/pexels-photo-26571206.jpeg',
    },
    {
      icon: Handshake,
      title: 'Step 3: Close Quickly',
      description:
        'Have the flexibility to sell on the date you choose. We can often close in as quick as 7 days with our Cash Offer Program.',
      image: 'https://images.pexels.com/photos/7647387/pexels-photo-7647387.jpeg',
    },
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            3 Simple Steps to Cash in Your Hand
          </h2>
          <p className='text-xl text-gray-700 mb-4'>
            No agent, no inspections, no waiting. Start today.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            <span className='bg-yellow-100 px-3 py-1 rounded-full font-semibold'>⚡ Average time to offer: 24 hours</span>
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                data-animate
                className='opacity-0 group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden'
              >
                {/* Image */}
                <div className='mb-4 -mx-6 -mt-6'>
                  <img
                    src={step.image}
                    alt={step.title}
                    className='w-full h-40 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300'
                  />
                </div>

                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                  <div className='text-3xl font-bold text-emerald-200'>{index + 1}</div>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>{step.title}</h3>
                <p className='text-sm text-gray-700 leading-relaxed'>{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
