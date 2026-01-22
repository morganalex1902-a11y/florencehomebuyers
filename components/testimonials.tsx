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
      name: 'Sarah Johnson',
      location: 'Verified Customer',
      rating: 5,
      text: 'Florence Home Buyers made the process so easy! Got a fair offer within 24 hours and closed within a week. Highly recommended!',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    },
    {
      name: 'Michelle Davis',
      location: 'Verified Customer',
      rating: 5,
      text: 'I was stressed about selling my inherited property. They handled everything professionally and paid all costs. Worth every penny!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    {
      name: 'James Wilson',
      location: 'Verified Customer',
      rating: 5,
      text: 'Needed to sell quickly for a job opportunity. These guys delivered! Fast, transparent, and trustworthy.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
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
            Hundreds of satisfied homeowners have trusted us with their most important asset.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial
              className='opacity-0 bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:border-emerald-200 transition-all'
            >
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
              <p className='text-gray-700 mb-6 leading-relaxed italic'>
                "{testimonial.text}"
              </p>

              {/* Author with Image */}
              <div className='flex items-center gap-4'>
                <div className='relative w-14 h-14 flex-shrink-0'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-full h-full rounded-full object-cover border-2 border-emerald-200'
                  />
                </div>
                <div>
                  <p className='font-bold text-gray-900'>{testimonial.name}</p>
                  <p className='text-sm text-gray-600'>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-16 space-y-6'>
          <div className='bg-emerald-50 border-2 border-emerald-200 rounded-lg p-8'>
            <p className='text-lg text-gray-900 font-semibold mb-2'>
              Join 500+ Satisfied Homeowners
            </p>
            <p className='text-gray-700 mb-6'>
              Get your free, fair cash offer today. Average processing time: <span className='font-bold'>24 hours</span>
            </p>
            <button className='px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors'>
              Get My Free Offer Now
            </button>
          </div>

          <button className='px-6 py-3 text-emerald-600 font-bold border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors'>
            See More Customer Stories
          </button>
        </div>
      </div>
    </section>
  )
}
