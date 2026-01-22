import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TrustedSection } from '@/components/trusted-section'
import { ProcessSection } from '@/components/process'
import { SituationsSection } from '@/components/situations'
import { BenefitsSection } from '@/components/benefits'
import { TestimonialsSection } from '@/components/testimonials'
import { OptionsSection } from '@/components/options-section'
import { FAQSection } from '@/components/faq'
import { FormSection } from '@/components/form-section'
import { FloatingCTA } from '@/components/floating-cta'
import { MapPin } from 'lucide-react'

export const metadata = {
  title: 'Sell Your House Fast - Florence Home Buyers',
  description: 'Get a fair cash offer for your house within 24 hours. No fees, no commissions. Sell on your terms with Florence Home Buyers by Jeffreys Residences.',
}

const SERVICE_AREAS = [
  'Urban Centers',
  'Suburban Areas',
  'Rural Properties',
  'Multi-Family Homes',
  'Commercial Properties',
  'Vacant Land',
  'Foreclosure Properties',
  'Investment Properties',
  'Distressed Homes',
  'Historic Properties',
  'Estate Properties',
  'Bank-Owned Properties',
]

export default function PropertyTypesPage() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative min-h-[500px] bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-12 flex items-center'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>
              Sell Your House <span className='text-emerald-600'>Hassle-Free</span>
            </h1>

            <div className='bg-white border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8 shadow-sm'>
              <h2 className='text-2xl font-bold text-gray-900 mb-3'>Fast Cash Offers from Florence Home Buyers</h2>
              <p className='text-lg text-gray-700 mb-3'>
                Get A Fair Cash Offer Within 24 Hours – Sell On Your Terms. <span className='text-emerald-600 font-bold'>100% FREE!</span>
              </p>

              <div className='space-y-3 mb-6'>
                <div className='flex items-center gap-3'>
                  <span className='text-emerald-600 font-bold text-lg'>✓</span>
                  <span className='text-gray-700 font-semibold'>Sell Your House As-Is And Pay No Agent Fees</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-emerald-600 font-bold text-lg'>✓</span>
                  <span className='text-gray-700 font-semibold'>Don't Worry About Cleaning Up or Repairing Anything</span>
                </div>
              </div>

              <p className='text-gray-700 mb-6 leading-relaxed'>
                <strong>We solve problems – fast, easy, hassle-free.</strong> Trusted buyers by Jeffreys Residences. We buy all types of properties in any condition. When you need to sell your home quickly, fairly, and without the stress of listing, Florence Home Buyers is here for you.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg'>
                  Call (720) 456-7890
                </button>
                <button className='px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors text-lg'>
                  Get My Offer Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types We Buy */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <MapPin className='w-8 h-8 text-emerald-600' />
            Property Types We Buy
          </h2>
          <p className='text-gray-700 mb-8 max-w-2xl'>
            We buy all types of properties in any condition. Whether it's a single family home, vacant land, or commercial property, we can help.
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className='bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow'
              >
                <p className='font-semibold text-gray-900'>{area}</p>
              </div>
            ))}
          </div>

          <p className='text-center text-gray-600 mt-8'>
            If your property type isn't listed, don't worry — we likely can help. Contact us to discuss your situation!
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustedSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Situations Section */}
      <SituationsSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Options Section */}
      <OptionsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Denver-Specific CTA */}
      <section className='py-16 bg-emerald-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Denver Cash Offer Program
              </h2>
              <p className='text-lg mb-6 opacity-90'>
                Whether you're dealing with a foreclosure, going through a divorce, dealing with difficult tenants, or just need to move quickly, we can help. We understand the Denver real estate market and we know how to buy houses quickly and fairly.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-start gap-3'>
                  <span className='text-xl font-bold mt-1'>✓</span>
                  <span>We buy houses in Denver and surrounding areas</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-xl font-bold mt-1'>✓</span>
                  <span>Fair cash price, fast</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-xl font-bold mt-1'>✓</span>
                  <span>No hassles</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-xl font-bold mt-1'>✓</span>
                  <span>As-is purchase</span>
                </li>
              </ul>
              <button className='px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg'>
                Get Started Today
              </button>
            </div>

            <div className='bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg h-96 flex items-center justify-center opacity-50'>
              <div className='text-center'>
                <MapPin className='w-24 h-24 mx-auto opacity-50' />
                <p className='text-lg font-semibold mt-4'>Denver Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Denver Homeowners Choose Us */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            Why Denver Homeowners Choose Florence Home Buyers
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gradient-to-b from-blue-50 to-transparent p-8 rounded-lg border border-blue-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>Local Expertise</h3>
              <p className='text-gray-700 leading-relaxed'>
                We know the Denver real estate market inside and out. We understand the neighborhoods, the property values, and the unique challenges that homeowners in Denver face. This means we can make fair offers quickly.
              </p>
            </div>

            <div className='bg-gradient-to-b from-emerald-50 to-transparent p-8 rounded-lg border border-emerald-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>Fast Closing</h3>
              <p className='text-gray-700 leading-relaxed'>
                In Denver's competitive market, speed matters. We can close in as little as 7 days with our cash offer program. No waiting for financing, no contingencies — just a clean, quick transaction.
              </p>
            </div>

            <div className='bg-gradient-to-b from-purple-50 to-transparent p-8 rounded-lg border border-purple-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>Fair Market Pricing</h3>
              <p className='text-gray-700 leading-relaxed'>
                We're not here to lowball or trick anyone. Our offers are based on current Denver market conditions and the actual condition of your property. You get fair pricing, not a discount we've arbitrarily decided on.
              </p>
            </div>

            <div className='bg-gradient-to-b from-orange-50 to-transparent p-8 rounded-lg border border-orange-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>Hassle-Free Process</h3>
              <p className='text-gray-700 leading-relaxed'>
                No showings, no open houses, no months on the market. We buy as-is, so you don't have to invest time and money in repairs. We handle all the details and close on your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <FormSection />

      <Footer />
      <FloatingCTA />
    </main>
  )
}
