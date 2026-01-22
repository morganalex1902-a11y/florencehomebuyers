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

import { CTABannerSection } from '@/components/cta-banner'

function CTABannerSectionWrapper() {
  return <CTABannerSection />
}
