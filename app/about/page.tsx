import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TrustedSection } from '@/components/trusted-section'
import { TestimonialsSection } from '@/components/testimonials'
import { FormSection } from '@/components/form-section'
import { FloatingCTA } from '@/components/floating-cta'
import { Award, Users, Handshake, Heart } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - Florence Home Buyers',
  description: 'Learn about Florence Home Buyers, a trusted local cash home buyer in Florence, Alabama with years of experience helping homeowners sell their properties quickly and fairly.',
}

export default function About() {
  return (
    <main className='w-full min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <section className='min-h-[400px] bg-background flex items-center justify-center py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            About Florence Home Buyers
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            We are Florence's premier house-buying company, dedicated to helping homeowners in all situations sell their properties quickly, fairly, and with complete peace of mind.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center mb-12'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Our Story</h2>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                Florence Home Buyers was founded with a simple mission: to provide homeowners in Florence, Alabama with a fair, honest, and fast alternative to selling through traditional real estate channels.
              </p>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                We understood the pain points homeowners face — the stress of open houses, the uncertainty of market timing, the burden of expensive repairs, and the frustration of agent commissions eating into their proceeds.
              </p>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                That's why we created a different approach. We buy houses directly from homeowners, we pay in cash, and we close on your timeline. No fluff, no games, just straightforward business.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                For over a decade, we've been helping homeowners in Florence and surrounding areas sell their homes quickly, fairly, and without the hassles of traditional real estate.
              </p>
            </div>
            <div className='relative h-96 rounded-lg overflow-hidden shadow-lg'>
              <Image
                src='https://images.pexels.com/photos/30004360/pexels-photo-30004360.jpeg'
                alt='Professional real estate team'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-16 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-12'>
            Our Core Values
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Honesty */}
            <div className='bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg transition-shadow'>
              <div className='flex items-start gap-4 mb-4'>
                <Award className='w-8 h-8 text-red-500 flex-shrink-0 mt-1' />
                <div>
                  <h3 className='text-2xl font-bold text-white mb-3'>Honesty & Integrity</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    We believe in transparent communication and fair dealing. We are not always the best option for everyone, and we do our best to point people in the right direction in that case. Your trust is our most valuable asset.
                  </p>
                </div>
              </div>
            </div>

            {/* Speed & Efficiency */}
            <div className='bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg transition-shadow'>
              <div className='flex items-start gap-4 mb-4'>
                <Award className='w-8 h-8 text-red-500 flex-shrink-0 mt-1' />
                <div>
                  <h3 className='text-2xl font-bold text-white mb-3'>Speed & Efficiency</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    We respect your time. That's why we've streamlined our process to get you a fair cash offer within 24 hours, and we can close as quickly as 7 days if that works for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Fair Pricing */}
            <div className='bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg transition-shadow'>
              <div className='flex items-start gap-4 mb-4'>
                <Handshake className='w-8 h-8 text-red-500 flex-shrink-0 mt-1' />
                <div>
                  <h3 className='text-2xl font-bold text-white mb-3'>Fair Pricing</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    We offer competitive cash prices based on current market conditions. No low-ball offers here — we want to do business with you in a way that's fair for everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Care */}
            <div className='bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg transition-shadow'>
              <div className='flex items-start gap-4 mb-4'>
                <Heart className='w-8 h-8 text-red-500 flex-shrink-0 mt-1' />
                <div>
                  <h3 className='text-2xl font-bold text-white mb-3'>Customer Care</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    We care deeply about the satisfaction of the homeowners with whom we work. We are always striving for excellence in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className='py-16 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-12'>
            By The Numbers
          </h2>

          <div className='grid md:grid-cols-4 gap-8 text-center'>
            <div className='p-8 bg-gray-800 rounded-lg border border-gray-700'>
              <div className='text-4xl md:text-5xl font-bold text-red-500 mb-2'>500+</div>
              <p className='text-white font-semibold'>Happy Homeowners</p>
              <p className='text-gray-400 text-sm mt-2'>Families we've helped sell their homes</p>
            </div>

            <div className='p-8 bg-gray-800 rounded-lg border border-gray-700'>
              <div className='text-4xl md:text-5xl font-bold text-red-500 mb-2'>10+</div>
              <p className='text-white font-semibold'>Years Experience</p>
              <p className='text-gray-400 text-sm mt-2'>Successfully buying and selling homes</p>
            </div>

            <div className='p-8 bg-gray-800 rounded-lg border border-gray-700'>
              <div className='text-4xl md:text-5xl font-bold text-red-500 mb-2'>24</div>
              <p className='text-white font-semibold'>Hour Offers</p>
              <p className='text-gray-400 text-sm mt-2'>Fast fair cash offers on your home</p>
            </div>

            <div className='p-8 bg-gray-800 rounded-lg border border-gray-700'>
              <div className='text-4xl md:text-5xl font-bold text-red-500 mb-2'>5★</div>
              <p className='text-white font-semibold'>Average Rating</p>
              <p className='text-gray-400 text-sm mt-2'>Highly rated by our customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className='py-16 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-8'>
            Community Involvement
          </h2>
          <p className='text-center text-gray-300 max-w-2xl mx-auto mb-12'>
            We believe in giving back to the community we serve. Florence Home Buyers is actively involved in local initiatives and charitable organizations throughout Huntsville and Madison County.
          </p>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-gray-800 p-6 rounded-lg border border-gray-700 text-center'>
              <h4 className='text-xl font-bold text-white mb-2'>Local Partnerships</h4>
              <p className='text-gray-400'>We partner with local non-profits to support community development</p>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg border border-gray-700 text-center'>
              <h4 className='text-xl font-bold text-white mb-2'>Charitable Giving</h4>
              <p className='text-gray-400'>A portion of our business goes to supporting causes in Huntsville</p>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg border border-gray-700 text-center'>
              <h4 className='text-xl font-bold text-white mb-2'>Community Events</h4>
              <p className='text-gray-400'>We sponsor and participate in local events and initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustedSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact CTA */}
      <section className='py-16 bg-emerald-600 text-white text-center'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to Sell Your House?
          </h2>
          <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
            Get your fair cash offer today. It's free, no obligation, and we can have an offer to you within 24 hours.
          </p>
          <button className='px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg'>
            Get Your Free Offer
          </button>
        </div>
      </section>

      <FormSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
