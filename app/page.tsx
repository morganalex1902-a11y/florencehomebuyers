import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { TrustedSection } from '@/components/trusted-section'
import { ProcessSection } from '@/components/process'
import { SituationsSection } from '@/components/situations'
import { BenefitsSection } from '@/components/benefits'
import { TestimonialsSection } from '@/components/testimonials'
import { OptionsSection } from '@/components/options-section'
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
      <SituationsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <OptionsSection />
      <FAQSection />
      <FormSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
