import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { TrustedSection } from '@/components/trusted-section'
import { ProcessSection } from '@/components/process'
import { QuickFormSection } from '@/components/quick-form-section'
import { TestimonialsSection } from '@/components/testimonials'
import { FAQSection } from '@/components/faq'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

export default function Home() {
  return (
    <main className='w-full min-h-screen bg-background'>
      <Header />
      <HeroSection />

      {/* First Quick Form - After Hero */}
      <QuickFormSection
        title='Get a Free Cash Offer Now'
        subtitle={'No obligations. Just fill out the form and we\'ll contact you within 24 hours with a fair cash offer.'}
        backgroundColor='bg-white'
        buttonText='Get My Free Offer'
      />

      <TrustedSection />
      <ProcessSection />

      {/* Second Quick Form - After Process */}
      <QuickFormSection
        title='Ready to Sell Your Home?'
        subtitle='Start the process with us. Quick, simple, and no hassle.'
        backgroundColor='bg-red-50'
        buttonText='Continue to Full Form'
      />

      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
