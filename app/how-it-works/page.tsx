import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProcessSection } from '@/components/process'
import { BenefitsSection } from '@/components/benefits'
import { TestimonialsSection } from '@/components/testimonials'
import { FAQSection } from '@/components/faq'
import { FormSection } from '@/components/form-section'
import { FloatingCTA } from '@/components/floating-cta'
import { Clock, Calendar, Handshake, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'How We Buy Houses - Florence Home Buyers',
  description: 'Learn our proven process for buying houses in Huntsville, Alabama. Get a fair cash offer in 24 hours and close on your timeline.',
}

export default function HowItWorks() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='min-h-[400px] bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            How Do I Sell My House Fast In Huntsville, Alabama?
          </h1>
          <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
            Share your home details online or call us to get started. Fill out our quick, confidential form and receive a fair cash offer within 24 hours — no obligations, no hassle!
          </p>
        </div>
      </section>

      {/* Detailed 3-Step Process */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            Sell Your Home Fast, Easy, and Hassle-Free!
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Step 1 */}
            <div className='bg-gradient-to-b from-red-50 to-transparent p-8 rounded-lg border border-red-200'>
              <div className='flex items-center justify-center mb-6'>
                <div className='w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold'>
                  1
                </div>
              </div>
              <Clock className='w-12 h-12 text-red-600 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-gray-900 text-center mb-4'>
                Get a Fair Offer Within 24 Hours
              </h3>
              <p className='text-gray-700 text-center mb-4'>
                Avoid the hassles of listing your house with our Huntsville Cash Offer Program. In many cases, we can present you with a fair, all-cash offer in as little as 24 hours – no obligations, no fees.
              </p>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>Quick property assessment</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>No commission or fees</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>Zero obligations to accept</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className='bg-gradient-to-b from-red-50 to-transparent p-8 rounded-lg border border-red-200'>
              <div className='flex items-center justify-center mb-6'>
                <div className='w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold'>
                  2
                </div>
              </div>
              <Calendar className='w-12 h-12 text-red-600 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-gray-900 text-center mb-4'>
                Pick the Date You Want to Close
              </h3>
              <p className='text-gray-700 text-center mb-4'>
                Selling your house can be stressful. Have peace of mind by knowing all of your options to sell your house (we can even do the repairs for you!). You control the timeline.
              </p>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>Flexible closing dates</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>We handle all repairs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>No stress or pressure</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className='bg-gradient-to-b from-red-50 to-transparent p-8 rounded-lg border border-red-200'>
              <div className='flex items-center justify-center mb-6'>
                <div className='w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold'>
                  3
                </div>
              </div>
              <Handshake className='w-12 h-12 text-red-600 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-gray-900 text-center mb-4'>
                Sell on Your Terms. Close Quickly
              </h3>
              <p className='text-gray-700 text-center mb-4'>
                Have the flexibility to sell on the date you choose. We can often close in as quick as 7 days with our Cash Offer Program.
              </p>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>Close in as little as 7 days</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>No showings or open houses</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>All-cash purchase</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='text-center mt-12'>
            <button className='px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all text-lg shadow-lg hover:shadow-xl'>
              Get My Fair Offer Today!
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Cash Buyer */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            Why Choose a Cash Home Buyer?
          </h2>

          <div className='grid md:grid-cols-2 gap-12 mb-12'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Save Time & Money</h3>
              <ul className='space-y-4'>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>No Agent Fees</h4>
                    <p className='text-gray-600 text-sm'>Save up to 6% in real estate commissions</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>Fast Timeline</h4>
                    <p className='text-gray-600 text-sm'>Close in as few as 7 days, not 30-90 days</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>No Repairs Needed</h4>
                    <p className='text-gray-600 text-sm'>Sell your house as-is without costly renovations</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>Certainty of Sale</h4>
                    <p className='text-gray-600 text-sm'>All-cash offer means no financing falling through</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Flexibility & Peace of Mind</h3>
              <ul className='space-y-4'>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>You Choose the Close Date</h4>
                    <p className='text-gray-600 text-sm'>We work around your schedule and timeline</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>No Showings</h4>
                    <p className='text-gray-600 text-sm'>No strangers through your home, no disruption</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>Fair Market Offer</h4>
                    <p className='text-gray-600 text-sm'>Get a competitive offer based on current market conditions</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <CheckCircle className='w-6 h-6 text-emerald-600 flex-shrink-0' />
                  <div>
                    <h4 className='font-bold text-gray-900'>No Hidden Costs</h4>
                    <p className='text-gray-600 text-sm'>Transparent pricing with no surprise fees at closing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg'>
            <h4 className='font-bold text-gray-900 mb-2'>Not Sure If This Is Right For You?</h4>
            <p className='text-gray-700'>
              We're not always the best option for everyone, and we do our best to point people in the right direction in that case. If selling to a cash buyer isn't the right fit, we'll be honest with you about it.
            </p>
          </div>
        </div>
      </section>

      {/* Use existing sections */}
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <FormSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
