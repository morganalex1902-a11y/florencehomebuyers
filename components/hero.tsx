'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

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
      className='relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden'
    >
      {/* Background Image with Overlay */}
      <Image
        src='https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2F8a42ed7fa33b428f83bba4d31e30bae3?format=webp&width=800&height=1200'
        alt='Beautiful Florence home'
        fill
        className='object-cover'
        priority
      />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-4'>
            Florence Home Buyers
          </h1>
          <p className='text-lg sm:text-xl text-gray-100'>
            We Buy Houses Fast. Sell With Confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
