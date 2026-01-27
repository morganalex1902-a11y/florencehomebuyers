'use client'

import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      title: 'Florence, AL',
      text: 'Florence Home Buyers made the process so easy! Got a fair offer within 24 hours and closed within a week.',
      image: 'https://images.pexels.com/photos/11701102/pexels-photo-11701102.jpeg'
    },
    {
      name: 'Robert Thompson',
      title: 'Florence, AL',
      text: 'I was stressed about selling my inherited property. They handled everything professionally and paid all costs.',
      image: 'https://images.pexels.com/photos/9271180/pexels-photo-9271180.jpeg'
    },
    {
      name: 'Sarah Williams',
      title: 'Florence, AL',
      text: 'Needed to sell quickly for a job transfer. These guys delivered! Fast, transparent, and trustworthy.',
      image: 'https://images.pexels.com/photos/8867475/pexels-photo-8867475.jpeg'
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
            Real Clients. Real Reviews.
          </h2>
          <p className='text-xl text-gray-200'>
            Hear from homeowners who have trusted us with their properties.
          </p>
        </div>

        {/* Carousel Container */}
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            {/* Left Image */}
            <div className='relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group'>
              <Image
                src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                alt='Testimonial'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center'>
                <Play className='w-12 h-12 text-white fill-white' />
              </div>
            </div>

            {/* Center Card */}
            <div className='bg-blue-700 text-white rounded-lg p-8 flex flex-col justify-center shadow-lg h-64 md:h-80'>
              <p className='text-lg leading-relaxed mb-6 italic'>
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className='font-bold text-lg'>{testimonials[currentIndex].name}</p>
                <p className='text-blue-100'>{testimonials[currentIndex].title}</p>
              </div>
            </div>

            {/* Right Image */}
            <div className='relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group'>
              <Image
                src={testimonials[(currentIndex + 1) % testimonials.length].image}
                alt='Testimonial'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center'>
                <Play className='w-12 h-12 text-white fill-white' />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className='flex items-center justify-center gap-6'>
            <button
              onClick={prevSlide}
              className='p-2 border-2 border-gray-600 rounded-full hover:border-blue-600 hover:bg-blue-900 transition-all'
            >
              <ChevronLeft className='w-6 h-6 text-gray-300 hover:text-blue-400' />
            </button>

            <div className='flex gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className='p-2 border-2 border-gray-600 rounded-full hover:border-blue-600 hover:bg-blue-900 transition-all'
            >
              <ChevronRight className='w-6 h-6 text-gray-300 hover:text-blue-400' />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className='text-center mt-12'>
          <Link
            href='/reviews'
            prefetch={false}
            className='inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-xl'
          >
            See More Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
