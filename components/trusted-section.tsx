'use client'

import { Home } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

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

  return (
    <section ref={sectionRef} className='py-16 sm:py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Left - Icon and Title */}
            <div className='text-center md:text-left'>
              <div className='flex items-center justify-center md:justify-start gap-4 mb-6'>
                <div className='w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg'>
                  <Home className='w-8 h-8 text-white' />
                </div>
                <h2 className='text-4xl sm:text-5xl font-bold text-white'>
                  We Buy Houses Fast
                </h2>
              </div>

              <p className='text-lg text-gray-200 leading-relaxed mb-8'>
                Florence Home Buyers is committed to providing fair cash offers for your home, regardless of its current condition. Whether you're facing foreclosure, need to relocate quickly, or have an inherited property, we offer a straightforward solution without the typical hassles of traditional real estate sales.
              </p>

              <p className='text-gray-200 leading-relaxed mb-8'>
                Our team handles all the paperwork, inspections, and closing costs so you can focus on what matters most. We pride ourselves on transparency and integrity in every transaction.
              </p>

              <button
                onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className='px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg hover:shadow-xl text-lg'
              >
                Contact Us Today
              </button>
            </div>

            {/* Right - Image */}
            <div className='relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-lg'>
              <Image
                src='https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2Fc64ca9f52942409688787f6739f2d026?format=webp&width=800&height=1200'
                alt='Florence Home'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
