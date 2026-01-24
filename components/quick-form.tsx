'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Phone } from 'lucide-react'

interface QuickFormProps {
  variant?: 'default' | 'inline'
  buttonText?: string
  title?: string
  subtitle?: string
}

export function QuickForm({ 
  variant = 'default', 
  buttonText = 'Get Free Offer',
  title,
  subtitle 
}: QuickFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    streetAddress: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.email || !formData.phone || !formData.streetAddress) {
      alert('Please fill in all fields')
      return
    }
    
    setLoading(true)
    // Store form data in sessionStorage to pass to next page
    sessionStorage.setItem('propertyInfo', JSON.stringify(formData))
    // Redirect to full form
    router.push('/get-offer')
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            type='text'
            name='firstName'
            placeholder='Your Name *'
            value={formData.firstName}
            onChange={handleChange}
            required
            className='px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
            style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone Number *'
            value={formData.phone}
            onChange={handleChange}
            required
            className='px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
            style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
          />
        </div>

        <input
          type='email'
          name='email'
          placeholder='Email Address *'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
          style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
        />

        <input
          type='text'
          name='streetAddress'
          placeholder='Street Address *'
          value={formData.streetAddress}
          onChange={handleChange}
          required
          className='w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
          style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
        />

        <button
          type='submit'
          disabled={loading}
          className='w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg disabled:opacity-50'
        >
          {loading ? 'Loading...' : buttonText}
        </button>
      </form>
    )
  }

  return (
    <div className='bg-gray-900 p-10 rounded-xl border-2 border-red-600 shadow-lg'>
      {title && <h2 className='text-3xl font-bold text-white mb-2'>{title}</h2>}
      {subtitle && <p className='text-gray-300 mb-6'>{subtitle}</p>}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-bold text-white mb-2'>
            Your Name *
          </label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder='First and Last Name'
            className='w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
            style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
          />
        </div>

        <div>
          <label className='block text-sm font-bold text-white mb-2'>
            Email Address *
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='your@email.com'
            className='w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
            style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
          />
        </div>

        <div>
          <label className='block text-sm font-bold text-white mb-2'>
            Phone Number *
          </label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder='(256) XXX-XXXX'
            className='w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
            style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
          />
        </div>

        <div>
          <label className='block text-sm font-bold text-white mb-2'>
            Property Address *
          </label>
          <input
            type='text'
            name='streetAddress'
            value={formData.streetAddress}
            onChange={handleChange}
            required
            placeholder='Street Address'
            className='w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
            style={{ backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: '1px' }}
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-lg hover:shadow-xl text-lg disabled:opacity-50'
        >
          {loading ? 'Loading...' : buttonText}
        </button>
      </form>
    </div>
  )
}
