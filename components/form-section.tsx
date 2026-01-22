'use client'

import React from "react"

import { Phone } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const PHONE_NUMBER = '(720) 456-7890'

export function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', address: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section ref={sectionRef} className='py-20 bg-gradient-to-b from-white to-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
              Get Your No-Obligation Cash Offer Today!
            </h2>
            <p className='text-lg text-gray-700'>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Form */}
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-xl border border-gray-200 shadow-lg'>
              {submitted ? (
                <div className='text-center py-8'>
                  <div className='inline-block p-4 bg-emerald-100 rounded-full mb-4'>
                    <div className='text-4xl'>✓</div>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    Thank You!
                  </h3>
                  <p className='text-gray-700'>
                    We'll be in touch within 24 hours with your cash offer.
                  </p>
                </div>
              ) : (
                <div className='space-y-5'>
                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      Name *
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                      placeholder='Your full name'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      Phone *
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                      placeholder='+92 XXX XXXXXXX'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                      placeholder='your@email.com'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      Property Address *
                    </label>
                    <input
                      type='text'
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                      placeholder='Your property location'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      Tell Us About Your Situation
                    </label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none'
                      placeholder="What's your situation? (optional)"
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg text-lg'
                  >
                    Get My Fair Cash Offer
                  </button>
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className='flex flex-col justify-center space-y-8'>
              <div className='bg-white p-8 rounded-xl border border-gray-200 shadow-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  Quick Contact
                </h3>

                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className='flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors mb-6'
                >
                  <Phone className='w-8 h-8 text-blue-600 flex-shrink-0' />
                  <div>
                    <p className='text-sm text-gray-600 font-medium'>Call Now</p>
                    <p className='text-2xl font-bold text-blue-600'>
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </a>

                <div className='space-y-4'>
                  <p className='text-gray-700 font-medium'>
                    ✓ Available 7 days a week
                  </p>
                  <p className='text-gray-700 font-medium'>
                    ✓ Quick response time (within 24 hours)
                  </p>
                  <p className='text-gray-700 font-medium'>
                    ✓ Free, no-obligation offer
                  </p>
                  <p className='text-gray-700 font-medium'>
                    ✓ Direct cash buyers (no agents)
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className='bg-emerald-50 p-6 rounded-xl border border-emerald-200'>
                <p className='text-center text-gray-800 font-medium'>
                  <span className='text-3xl'>🏆</span> Trusted By Hundreds of Karachi
                  Homeowners
                </p>
                <p className='text-center text-sm text-gray-700 mt-4'>
                  Fast • Fair • Hassle-Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
