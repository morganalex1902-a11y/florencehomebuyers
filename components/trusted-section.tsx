'use client'

import { Shield, TrendingUp, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function TrustedSection() {
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

  const features = [
    {
      icon: Shield,
      title: 'Trusted Partner',
      description:
        'Years of experience helping Karachi families solve their home-selling challenges with integrity and professionalism.',
    },
    {
      icon: TrendingUp,
      title: 'Fair Offers',
      description:
        'We provide competitive cash offers based on your property\'s true market value, no surprises or hidden fees.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Get your offer within 24 hours and close in as little as 7 days. No waiting months like traditional sales.',
    },
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6'>
            A Trusted Partner in Selling Your Home
          </h2>

          <p className='text-xl text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto'>
            We understand that every homeowner's situation is unique. Whether you're facing family inheritance
            disputes, urgent relocation abroad, bad tenants, properties needing repairs, or just want to avoid
            lengthy legal processes — we're here to solve your problem quickly and honestly.
          </p>

          {/* Features Grid */}
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className='p-8 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg hover:border-emerald-200 transition-all hover:-translate-y-1'
                >
                  <Icon className='w-10 h-10 text-emerald-600 mb-4' />
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className='text-center'>
            <button className='px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg text-lg'>
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
