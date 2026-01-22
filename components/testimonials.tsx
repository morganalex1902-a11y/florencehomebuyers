'use client'

import { Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('[data-testimonial]')
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

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      location: 'Madison, AL',
      rating: 5,
      text: 'Florence Home Buyers made the process so easy! Got a fair offer within 24 hours and closed within a week. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/11701102/pexels-photo-11701102.jpeg'
    },
    {
      name: 'Robert Thompson',
      location: 'Huntsville, AL',
      rating: 5,
      text: 'I was stressed about selling my inherited property. They handled everything professionally and paid all costs. Worth every penny!',
      avatar: 'https://images.pexels.com/photos/9271180/pexels-photo-9271180.jpeg'
    },
    {
      name: 'Sarah Williams',
      location: 'Madison County, AL',
      rating: 5,
      text: 'Needed to sell quickly for a job transfer. These guys delivered! Fast, transparent, and trustworthy.',
      avatar: 'https://images.pexels.com/photos/8867475/pexels-photo-8867475.jpeg'
    },
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Our Customers Love Us & So Will You!
          </h2>
          <p className='text-xl text-gray-700'>
            Hundreds of satisfied Huntsville homeowners have trusted us with their most important asset.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial
              className='opacity-0 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:border-emerald-200 transition-all overflow-hidden'
            >
              {/* Avatar */}
              <div className='relative h-48 w-full'>
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                {/* Stars */}
                <div className='flex gap-1 mb-4'>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 fill-amber-400 text-amber-400'
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className='text-gray-700 mb-6 leading-relaxed italic text-sm'>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <p className='font-bold text-gray-900'>{testimonial.name}</p>
                  <p className='text-sm text-gray-600'>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <button className='px-6 py-3 text-emerald-600 font-bold border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors'>
            See More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}
