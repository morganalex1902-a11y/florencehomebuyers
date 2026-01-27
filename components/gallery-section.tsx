'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function GallerySection() {
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

  const galleryImages = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2Ff645447c7a0849fdb387c583b5974a36?format=webp&width=800&height=1200',
      alt: 'Property demolition project',
      title: 'Demolished Property',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2F61a7067bda664fa782333654257d70f1?format=webp&width=800&height=1200',
      alt: 'Debris removal and processing',
      title: 'Debris Removal',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2Ff1b305f4f37340519d8b85dd9e94322f?format=webp&width=800&height=1200',
      alt: 'Building demolition with equipment',
      title: 'Full Demolition Service',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2Fd8e76aafa6e04867909acab66de5a8cd?format=webp&width=800&height=1200',
      alt: 'Debris hauling and transportation',
      title: 'Professional Hauling',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2Fb5e53c2cb4544ebabfc8b7e330850261?format=webp&width=800&height=1200',
      alt: 'Debris removal truck',
      title: 'Reliable Fleet',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section ref={sectionRef} className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
            Our Work In Action
          </h2>
          <p className='text-xl text-gray-300'>
            See examples of properties we've successfully purchased and processed. From condition assessment to final acquisition, we handle it all professionally.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='max-w-7xl mx-auto mb-12'>
          {/* Main Image Display */}
          <div className='relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl mb-8'>
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end'>
              <div className='p-8 text-white'>
                <h3 className='text-3xl font-bold'>{galleryImages[currentIndex].title}</h3>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className='flex items-center justify-between gap-4 mb-8'>
            <button
              onClick={prevSlide}
              className='p-2 md:p-3 border-2 border-blue-600 text-blue-400 rounded-full hover:bg-blue-900 hover:border-blue-400 transition-all'
              aria-label='Previous image'
            >
              <ChevronLeft className='w-6 h-6' />
            </button>

            <div className='flex gap-2 flex-wrap justify-center flex-1'>
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-600 w-3 hover:bg-blue-500'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className='p-2 md:p-3 border-2 border-blue-600 text-blue-400 rounded-full hover:bg-blue-900 hover:border-blue-400 transition-all'
              aria-label='Next image'
            >
              <ChevronRight className='w-6 h-6' />
            </button>
          </div>

          {/* Thumbnails */}
          <div className='grid grid-cols-5 gap-4'>
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-24 md:h-32 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-blue-600 shadow-lg shadow-blue-600/50'
                    : 'border-gray-600 hover:border-blue-400'
                }`}
                aria-label={`View ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover'
                />
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='max-w-3xl mx-auto text-center mt-16 bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-600/30 rounded-xl p-8'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Ready to Sell Your Property?
          </h3>
          <p className='text-gray-300 mb-6'>
            We have the expertise and resources to handle properties in any condition. Get your fair cash offer today.
          </p>
          <button
            onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
            className='px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-xl'
          >
            Get Your Free Offer
          </button>
        </div>
      </div>
    </section>
  )
}
