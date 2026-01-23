import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FormSection } from '@/components/form-section'
import { FloatingCTA } from '@/components/floating-cta'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Am I obligated to accept your offer?',
    answer:
      'No, absolutely not. Our offer is just that — an offer. There is no obligation to accept it. We\'ll present you with a fair, all-cash offer, and then it\'s completely up to you whether you want to move forward with us or pursue other options. If you don\'t think our offer is fair, we understand, and there are no hard feelings.',
  },
  {
    id: 2,
    question: 'My situation is complicated. Are you sure you can help?',
    answer:
      'We can help with almost any situation. We have experience purchasing homes from people going through foreclosure, dealing with inheritance issues, going through divorce, facing significant repairs, managing tenant problems, or just needing to sell quickly for any reason. If your situation is complex, that\'s often when a cash buyer like us can provide the most value. Call us to discuss your specific circumstances.',
  },
  {
    id: 3,
    question: 'Where do you buy property?',
    answer:
      'We buy properties in Denver, Colorado and the surrounding metropolitan areas. If you\'re not sure whether your property falls within our buying area, please call us or fill out our form and we\'ll let you know quickly. Even if you\'re outside our typical area, it doesn\'t hurt to ask — we may still be able to help.',
  },
  {
    id: 4,
    question: 'What information must I provide to sell my house?',
    answer:
      'To get a fair cash offer, we need basic information about your property: the address, property size, number of bedrooms and bathrooms, general condition, and any major issues or needed repairs. We also need your contact information (name, phone number, and email) so we can follow up with you. The more details you provide upfront, the more accurate our offer will be.',
  },
  {
    id: 5,
    question: 'Do I have to pay anything for your services?',
    answer:
      'No. There are absolutely no fees or commissions. No inspection fees, no appraisal fees, no closing costs paid by you. We cover all costs associated with the transaction. The offer we give you is what you receive — clean and simple. This is one of the major advantages of selling to a cash buyer like us instead of listing with an agent.',
  },
  {
    id: 6,
    question: 'What types of properties do you buy?',
    answer:
      'We buy single-family homes, townhouses, condos, investment properties, commercial properties, vacant land, and more. We buy properties in any condition — whether they\'re in pristine shape, need major repairs, or are vacant. If it\'s real estate in Karachi, we\'re likely interested.',
  },
  {
    id: 7,
    question: 'Are you real estate agents or investors?',
    answer:
      'We are professional cash home buyers and investors. We are NOT real estate agents. We don\'t list properties or take commissions — we buy properties directly. This is an important distinction because it means we have a different incentive structure. We want to make fair offers and build long-term relationships, not maximize commissions on sales.',
  },
  {
    id: 8,
    question: 'What\'s the best way to contact you?',
    answer:
      'You can reach us in several ways: Fill out the form on our website, call us directly, or email us. Phone is usually fastest if you need a quick answer. We try to respond to all inquiries within 24 hours. We\'re available during regular business hours and can arrange special times if you need to discuss something after hours.',
  },
  {
    id: 9,
    question: 'How quickly can we close?',
    answer:
      'We can close as quickly as 7 days if both parties are ready. More typically, we close within 14-30 days. You get to choose your closing date within reason. If you need even more time, we can often arrange that too. The important thing is that you\'re in control of the timeline — not us.',
  },
  {
    id: 10,
    question: 'What happens if my home needs repairs?',
    answer:
      'No problem. We buy homes in any condition. If your home needs repairs, renovations, or even major work, you don\'t have to do anything. We\'ll either do the repairs ourselves or factor them into our offer. Either way, you don\'t have to worry about it. This is one of the biggest advantages of selling to us instead of listing on the traditional market.',
  },
  {
    id: 11,
    question: 'Do you require a home inspection?',
    answer:
      'We may conduct our own inspection to make our offer, but we don\'t require you to pay for any inspections or appraisals. This is all on us. The inspection helps us understand the property condition and make the most accurate offer possible.',
  },
  {
    id: 12,
    question: 'What if I change my mind?',
    answer:
      'Until we both sign a purchase agreement, you\'re completely free to change your mind. Once you sign the agreement, we do expect it to be honored — but we\'ll discuss all the terms carefully with you beforehand so you fully understand what you\'re agreeing to. We\'re not in the business of surprising people or tricking anyone.',
  },
]

export const metadata = {
  title: 'FAQ - Florence Home Buyers',
  description:
    'Frequently asked questions about selling your house to Florence Home Buyers in Denver, Colorado. Get answers to common questions about our process.',
}

export default function FAQ() {
  return (
    <main className='w-full min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <section className='min-h-[300px] bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Frequently Asked Questions
          </h1>
          <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
            We've answered the most common questions about selling your home to Florence Home Buyers. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto px-4 max-w-3xl'>
          <div className='space-y-6'>
            {faqItems.map((item, index) => (
              <details
                key={item.id}
                className='group border border-gray-700 rounded-lg overflow-hidden hover:border-red-600 transition-colors'
                open={index === 0}
              >
                <summary className='flex items-center justify-between px-6 py-4 cursor-pointer bg-gray-900 hover:bg-gray-800 transition-colors'>
                  <h3 className='text-lg font-bold text-white pr-4'>{item.question}</h3>
                  <ChevronDown className='w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform' />
                </summary>
                <div className='px-6 py-4 bg-gray-800 border-t border-gray-700'>
                  <p className='text-gray-300 leading-relaxed'>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Still Have Questions?
          </h2>
          <p className='text-xl text-gray-700 mb-8 max-w-2xl mx-auto'>
            We're here to help! Reach out to us directly and we'll be happy to answer any additional questions you have about selling your home to Florence Home Buyers.
          </p>

          <div className='grid md:grid-cols-3 gap-8 mt-12'>
            <div className='bg-white p-8 rounded-lg border border-gray-200 text-center'>
              <div className='text-4xl font-bold text-emerald-600 mb-4'>📞</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Call Us</h3>
              <a href='tel:+923211234567' className='text-blue-600 hover:text-blue-700 font-semibold text-lg'>
                +92 321 1234567
              </a>
              <p className='text-gray-600 text-sm mt-2'>Available during business hours</p>
            </div>

            <div className='bg-white p-8 rounded-lg border border-gray-200 text-center'>
              <div className='text-4xl font-bold text-emerald-600 mb-4'>📧</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Email Us</h3>
              <a href='mailto:info@florencehomebuyers.com' className='text-blue-600 hover:text-blue-700 font-semibold'>
                info@florencehomebuyers.com
              </a>
              <p className='text-gray-600 text-sm mt-2'>We'll respond within 24 hours</p>
            </div>

            <div className='bg-white p-8 rounded-lg border border-gray-200 text-center'>
              <div className='text-4xl font-bold text-emerald-600 mb-4'>💬</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Fill Out Form</h3>
              <p className='text-gray-600 text-sm'>Submit the form below to get started today</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-emerald-600 text-white text-center'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to Get Your Fair Cash Offer?
          </h2>
          <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
            It's simple, fast, and obligation-free. Get your offer within 24 hours.
          </p>
          <button className='px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg'>
            Get Started Now
          </button>
        </div>
      </section>

      <FormSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
