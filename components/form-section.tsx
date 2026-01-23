'use client'

import React from "react"
import { Phone } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const PHONE_NUMBER = '(720) 456-7890'

export function FormSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    ownershipDuration: '',
    repairNeeds: '',
    ownerOccupied: '',
    timeline: '',
    ultimateGoal: '',
    smsConsent: false,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      setFormData((prev) => ({ ...prev, [name]: target.checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.firstName && formData.phone && formData.email && formData.streetAddress) {
      setStep(2)
    }
  }

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setStep(1)
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        ownershipDuration: '',
        repairNeeds: '',
        ownerOccupied: '',
        timeline: '',
        ultimateGoal: '',
        smsConsent: false,
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section ref={sectionRef} id='form-section' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            {step === 2 && (
              <div className='inline-block bg-red-50 px-4 py-2 rounded-full mb-4'>
                <p className='text-sm font-semibold text-red-600'>Step {step} of 2</p>
              </div>
            )}
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
              {step === 1
                ? 'Get Your Free Cash Offer Today!'
                : 'Tell Us About Your Property'}
            </h2>
            <p className='text-lg text-gray-700'>
              {step === 1
                ? 'No obligations. We\'ll respond within 24 hours with a fair cash offer.'
                : 'Help us understand your situation so we can provide the best offer.'}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-12 items-stretch'>
            {/* Form */}
            <div className='md:col-span-2 bg-white p-10 rounded-xl border-2 border-red-200 shadow-lg'>
              {submitted ? (
                <div className='text-center py-8'>
                  <div className='inline-block p-4 bg-red-100 rounded-full mb-4'>
                    <div className='text-4xl text-red-600'>✓</div>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    Thank You!
                  </h3>
                  <p className='text-gray-700'>
                    We'll be in touch within 24 hours with your cash offer.
                  </p>
                </div>
              ) : step === 1 ? (
                <form onSubmit={handleStep1Submit} className='space-y-5'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-bold text-gray-900 mb-2'>
                        First Name *
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        placeholder='First name'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-bold text-gray-900 mb-2'>
                        Last Name *
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        placeholder='Last name'
                      />
                    </div>
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
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                      placeholder='your@email.com'
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
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                      placeholder='(256) XXX-XXXX'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      Street Address *
                    </label>
                    <input
                      type='text'
                      name='streetAddress'
                      value={formData.streetAddress}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                      placeholder='Street Address'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg text-lg'
                  >
                    Continue to Get Offer
                  </button>
                </form>
              ) : (
                <form onSubmit={handleStep2Submit} className='space-y-6'>
                  <div className='pb-6 border-b border-gray-200'>
                    <div className='inline-block bg-red-50 px-3 py-1 rounded-full mb-2'>
                      <p className='text-xs font-semibold text-red-700'>Step 2 of 2</p>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>Address Information</h3>
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          Street Address *
                        </label>
                        <input
                          type='text'
                          name='streetAddress'
                          value={formData.streetAddress}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        />
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-bold text-gray-900 mb-2'>
                            City
                          </label>
                          <input
                            type='text'
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                            placeholder='City'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-bold text-gray-900 mb-2'>
                            State / Province / Region
                          </label>
                          <input
                            type='text'
                            name='state'
                            value={formData.state}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                            placeholder='State'
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          Zip / Postal Code
                        </label>
                        <input
                          type='text'
                          name='zipCode'
                          value={formData.zipCode}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                          placeholder='Zip Code'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>Personal Information</h3>
                    <div className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-bold text-gray-900 mb-2'>
                            First Name
                          </label>
                          <input
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-bold text-gray-900 mb-2'>
                            Last Name
                          </label>
                          <input
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          Email
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          Phone
                        </label>
                        <input
                          type='tel'
                          name='phone'
                          value={formData.phone}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property Information */}
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>Property Information</h3>
                    <p className='text-sm text-gray-600 mb-4'>
                      Excellent, we need a bit more info about your situation as we can provide you with your options and a cash offer.
                    </p>
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          How long have you owned the property?
                        </label>
                        <select
                          name='ownershipDuration'
                          value={formData.ownershipDuration}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select duration</option>
                          <option value='less-than-1'>Less than 1 year</option>
                          <option value='1-3-years'>1-3 years</option>
                          <option value='3-5-years'>3-5 years</option>
                          <option value='5-10-years'>5-10 years</option>
                          <option value='10-plus-years'>10+ years</option>
                        </select>
                      </div>

                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          What kind of repairs and maintenance does the house need?
                        </label>
                        <select
                          name='repairNeeds'
                          value={formData.repairNeeds}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select repairs needed</option>
                          <option value='excellent'>Excellent</option>
                          <option value='good'>Good</option>
                          <option value='fair'>Fair</option>
                          <option value='needs-work'>Needs work</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Your Situation */}
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>Your Situation</h3>
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          Is the property owner occupied?
                        </label>
                        <select
                          name='ownerOccupied'
                          value={formData.ownerOccupied}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select option</option>
                          <option value='yes'>Yes - Owner Occupied</option>
                          <option value='no'>No - Not Owner Occupied</option>
                        </select>
                      </div>

                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          What's your timeline?
                        </label>
                        <select
                          name='timeline'
                          value={formData.timeline}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select timeline</option>
                          <option value='asap'>ASAP</option>
                          <option value='1-3-months'>1-3 months</option>
                          <option value='3-6-months'>3-6 months</option>
                          <option value='6-plus-months'>6+ months</option>
                        </select>
                      </div>

                      <div>
                        <label className='block text-sm font-bold text-gray-900 mb-2'>
                          What's your ultimate goal with your house?
                        </label>
                        <textarea
                          name='ultimateGoal'
                          value={formData.ultimateGoal}
                          onChange={handleChange}
                          rows={4}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none'
                          placeholder='Tell us about your goals...'
                        />
                      </div>
                    </div>
                  </div>

                  {/* SMS Consent */}
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-start gap-3'>
                      <input
                        type='checkbox'
                        name='smsConsent'
                        checked={formData.smsConsent}
                        onChange={handleChange}
                        id='sms-consent'
                        className='mt-1 w-5 h-5'
                      />
                      <label htmlFor='sms-consent' className='text-sm text-gray-600'>
                        Yes, I want to receive SMS updates and exclusive offers from Madison County House Buyers. By submitting this form, you understand the instructions provided in our communication policy.
                      </label>
                    </div>
                  </div>

                  <div className='flex gap-3'>
                    <button
                      type='button'
                      onClick={() => setStep(1)}
                      className='flex-1 py-3 border-2 border-red-300 text-gray-900 font-bold rounded-lg hover:bg-red-50 transition-colors'
                    >
                      Back
                    </button>
                    <button
                      type='submit'
                      className='flex-1 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className='flex flex-col justify-center space-y-6'>
              <div className='bg-red-700 text-white p-8 rounded-xl shadow-xl'>
                <h3 className='text-2xl font-bold mb-6'>
                  Need Help?
                </h3>

                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className='flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors mb-6'
                >
                  <Phone className='w-8 h-8 flex-shrink-0' />
                  <div>
                    <p className='text-sm text-red-100 font-medium'>Call Now</p>
                    <p className='text-2xl font-bold'>
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </a>

                <div className='space-y-3 text-red-50'>
                  <p className='font-medium'>
                    ✓ Available 7 days a week
                  </p>
                  <p className='font-medium'>
                    ✓ Quick response within 24 hours
                  </p>
                  <p className='font-medium'>
                    ✓ Free, no-obligation offer
                  </p>
                  <p className='font-medium'>
                    ✓ Direct cash buyers
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className='bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200'>
                <p className='text-center text-gray-800 font-bold text-lg mb-2'>
                  🏆 Trusted Choice
                </p>
                <p className='text-center text-gray-700 font-medium'>
                  Hundreds of Florence homeowners have sold with us
                </p>
                <p className='text-center text-sm text-gray-600 mt-3'>
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
