'use client'

import { ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const faqs = [
    {
      question: 'Am I obligated to accept your offer?',
      answer:
        'No. Of course not! There are no obligations whatsoever. You\'re in complete control of the process.',
    },
    {
      question: 'My situation is complicated. Are you sure you can help?',
      answer:
        'We handle inheritance disputes, divorce, foreclosure, bad tenants, damaged properties, relocation abroad, and more! No matter how complicated, we have experience solving tough situations.',
    },
    {
      question: 'Where do you buy property?',
      answer:
        'Throughout Huntsville and Madison County, Alabama — including Madison, Meridianville, and surrounding areas. Fill the form even if your location isn\'t listed!',
    },
    {
      question: 'What information must I provide?',
      answer:
        'Just name, phone, email, and property address. We handle the rest and make the process as simple as possible.',
    },
    {
      question: 'What types of property do we buy?',
      answer:
        'Houses, flats/apartments, plots, commercial properties, vacant land, and more. We buy all property types as-is.',
    },
    {
      question: 'Do I have to pay anything?',
      answer:
        'No! We cover all costs, fees, repairs — you pay nothing. It\'s completely free to get an offer.',
    },
    {
      question: 'Are you just realtors?',
      answer:
        'No — we are direct cash buyers, not agents. We buy off-market as-is, which means faster, easier transactions with no middlemen.',
    },
    {
      question: 'Best way to contact you?',
      answer:
        'Fill out the form for the fastest response, or call us directly on the number at the top of the page.',
    },
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white text-center mb-16'>
            Common Questions
          </h2>

          <div className='space-y-3'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-400 transition-colors'
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className='w-full flex items-center justify-between p-6 bg-gray-800 hover:bg-gray-750 transition-colors text-left'
                >
                  <span className='font-bold text-white text-lg'>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className='px-6 pb-6 bg-gray-750 border-t border-gray-700'>
                    <p className='text-gray-200 leading-relaxed'>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
