import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FormSection } from '@/components/form-section'
import { FloatingCTA } from '@/components/floating-cta'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Florence Home Buyers',
  description: 'Get in touch with Florence Home Buyers in Denver, Colorado. Call, email, or fill out our form to start selling your house today.',
}

export default function Contact() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='min-h-[350px] bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Get in Touch With Us
          </h1>
          <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
            Ready to sell your house? We're here to help. Reach out to us today and get your fair cash offer within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Phone Card */}
            <div className='bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8 text-center'>
              <Phone className='w-12 h-12 text-blue-600 mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>Call Us</h3>
              <a href='tel:7204567890' className='text-blue-600 hover:text-blue-700 font-bold text-2xl block mb-4'>
              (720) 456-7890
            </a>
              <p className='text-gray-700'>
                Call us directly to speak with a specialist about your property.
              </p>
              <p className='text-sm text-gray-600 mt-4'>
                Available Monday - Friday, 9 AM - 6 PM
                <br />
                Saturday, 10 AM - 4 PM
              </p>
            </div>

            {/* Email Card */}
            <div className='bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-lg p-8 text-center'>
              <Mail className='w-12 h-12 text-emerald-600 mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>Email Us</h3>
              <a href='mailto:info@florencehomebuyers.com' className='text-emerald-600 hover:text-emerald-700 font-bold text-lg block mb-4'>
                info@florencehomebuyers.com
              </a>
              <p className='text-gray-700'>
                Send us an email with details about your property and we'll respond quickly.
              </p>
              <p className='text-sm text-gray-600 mt-4'>
                We typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Address Card */}
          <div className='bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-8 max-w-2xl mx-auto'>
            <div className='flex items-start gap-4'>
              <MapPin className='w-12 h-12 text-purple-600 flex-shrink-0 mt-1' />
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Visit Us</h3>
                <p className='text-gray-900 font-semibold'>Florence Home Buyers</p>
                <p className='text-gray-700'>by Jeffreys Residences</p>
                <p className='text-gray-700 mt-2'>
                  1234 Business Drive
                  <br />
                  Denver, Colorado 80202
                </p>
                <p className='text-sm text-gray-600 mt-4'>
                  We're located in the heart of Karachi for your convenience. By appointment preferred.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Response Time */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            Hours & Response Times
          </h2>

          <div className='grid md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
            <div className='bg-white border border-gray-200 rounded-lg p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <Clock className='w-6 h-6 text-emerald-600' />
                <h3 className='text-xl font-bold text-gray-900'>Business Hours</h3>
              </div>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex justify-between'>
                  <span>Monday - Friday:</span>
                  <span className='font-semibold'>9:00 AM - 6:00 PM</span>
                </li>
                <li className='flex justify-between'>
                  <span>Saturday:</span>
                  <span className='font-semibold'>10:00 AM - 4:00 PM</span>
                </li>
                <li className='flex justify-between'>
                  <span>Sunday:</span>
                  <span className='font-semibold'>Closed</span>
                </li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 rounded-lg p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <Mail className='w-6 h-6 text-emerald-600' />
                <h3 className='text-xl font-bold text-gray-900'>Response Times</h3>
              </div>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex justify-between'>
                  <span>Phone Call:</span>
                  <span className='font-semibold'>Same day</span>
                </li>
                <li className='flex justify-between'>
                  <span>Email:</span>
                  <span className='font-semibold'>Within 24 hours</span>
                </li>
                <li className='flex justify-between'>
                  <span>Form Submission:</span>
                  <span className='font-semibold'>Within 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
            Get Your Fair Cash Offer Today
          </h2>
          <p className='text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto'>
            Fill out the form below with information about your property and we'll contact you within 24 hours with a fair cash offer. No obligation, no pressure, completely free.
          </p>
        </div>
      </section>

      {/* Social Media */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>Follow Us On Social Media</h2>
          <p className='text-gray-700 mb-8 max-w-2xl mx-auto'>
            Connect with us on social media for updates, testimonials, and tips about selling your house.
          </p>

          <div className='flex justify-center gap-6 mb-8'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'
              title='Facebook'
            >
              <Facebook className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors'
              title='LinkedIn'
            >
              <Linkedin className='w-6 h-6' />
            </a>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Or Connect With Us</h3>
            <p className='text-gray-700 mb-6'>
              The fastest way to get in touch is to call us directly or fill out our form. We respond quickly and are always happy to answer questions.
            </p>
            <button className='px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors'>
              Fill Out Our Form
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Form */}
      <FormSection />

      {/* FAQ Link */}
      <section className='py-16 bg-blue-50 border-t border-blue-100'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Have Questions First?</h2>
          <p className='text-gray-700 mb-6'>
            Check out our comprehensive FAQ to learn more about our process and what to expect.
          </p>
          <a href='/faq' className='inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors'>
            Read Our FAQ
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  )
}
