'use client'

import { useState, useEffect } from 'react'
import { Phone, Home, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

const PHONE_NUMBER = '(256) 762-1898'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-gradient-to-b from-white to-transparent py-6'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
            <Home className='w-6 h-6 text-red-600' />
            <div className='flex flex-col'>
              <span className='font-bold text-sm text-gray-900'>Florence Home Buyers</span>
              <span className='text-xs text-gray-600'>by Jeffreys Investment Properties</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-6 mx-8'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-700 hover:text-red-600 font-semibold text-sm transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Phone & CTA */}
          <div className='flex items-center gap-2 md:gap-4'>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className='hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors text-sm'
            >
              <Phone className='w-4 h-4 text-red-600 animate-pulse' />
              <span className='font-bold text-red-600'>{PHONE_NUMBER}</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
              className='hidden sm:block px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all text-sm whitespace-nowrap shadow-md hover:shadow-lg'
            >
              Get Free Offer
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6 text-gray-900' />
              ) : (
                <Menu className='w-6 h-6 text-gray-900' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className='lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className='pt-4 border-t border-gray-200 space-y-3'>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors'
              >
                <Phone className='w-5 h-5 text-red-600' />
                <span className='font-bold text-red-600'>{PHONE_NUMBER}</span>
              </a>
              <button
                onClick={() => {
                  document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMobileMenuOpen(false)
                }}
                className='w-full px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-md hover:shadow-lg'
              >
                Get Free Offer
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
