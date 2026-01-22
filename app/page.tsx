import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { TrustedSection } from '@/components/trusted-section'
import { ProcessSection } from '@/components/process'
import { TestimonialsSection } from '@/components/testimonials'
import { FAQSection } from '@/components/faq'
import { FormSection } from '@/components/form-section'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

export default function Home() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <TrustedSection />
      <ProcessSection />
      <CTABannerSection />
      <TestimonialsSection />
      <FAQSection />
      <FormSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

'use client'

function CTABannerSection() {
  return (
    <section className='py-12 bg-red-700'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white mb-4'>
            See what we can offer you for your house...
          </h2>
          <p className='text-red-100 mb-8'>
            Send us some basic details about your home and we'll get back to you quickly with a fair cash offer.
          </p>
          <button
            onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
            className='px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-red-50 active:scale-95 transition-all shadow-lg hover:shadow-xl'
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
