import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FormSection } from '@/components/form-section'
import { FloatingCTA } from '@/components/floating-cta'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  date: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'James Mitchell',
    location: 'Verified Customer',
    rating: 5,
    text: 'Florence Home Buyers made selling my house incredibly easy! I got a fair offer within 24 hours, and we closed in just one week. No repairs, no hassles, no fees. Highly recommended!',
    date: '2024-12-15',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Verified Customer',
    rating: 5,
    text: 'I was going through a difficult divorce and needed to sell quickly. Florence Home Buyers understood my situation and offered a fair price. The entire process was smooth and professional.',
    date: '2024-12-01',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
  },
  {
    id: 3,
    name: 'Michael Chen',
    location: 'Verified Customer',
    rating: 5,
    text: 'Dealing with tenants was a nightmare. When I called Florence Home Buyers, they made the whole process painless. Fair offer, quick close, and I\'m relieved of the landlord responsibilities.',
    date: '2024-11-20',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: 4,
    name: 'Rebecca Davis',
    location: 'Verified Customer',
    rating: 5,
    text: 'I inherited a property I didn\'t want to manage. Florence Home Buyers purchased it as-is with no repairs needed. The entire transaction was transparent and hassle-free. Excellent service!',
    date: '2024-11-10',
    image: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg',
  },
  {
    id: 5,
    name: 'David Thompson',
    location: 'Verified Customer',
    rating: 5,
    text: 'The property needed significant repairs, and I didn\'t have the money or energy to fix it. Florence Home Buyers bought it as-is and even covered the repairs themselves. Perfect solution!',
    date: '2024-10-25',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
  },
  {
    id: 6,
    name: 'Lisa Rodriguez',
    location: 'Verified Customer',
    rating: 5,
    text: 'I needed to relocate for work and had very little time. Florence Home Buyers came through with a fair offer quickly and we closed in 10 days. Couldn\'t have asked for better service.',
    date: '2024-10-15',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
  },
  {
    id: 7,
    name: 'Robert Wilson',
    location: 'Verified Customer',
    rating: 5,
    text: 'My credit situation made it hard to get a traditional loan, so I sold my property to Florence Home Buyers. They were understanding and professional throughout. Thank you!',
    date: '2024-09-30',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  },
  {
    id: 8,
    name: 'Jennifer Martinez',
    location: 'Verified Customer',
    rating: 5,
    text: 'The property had been vacant for years and was costing me money each month. Florence Home Buyers purchased it quickly and put it back on the market. Finally, some peace of mind!',
    date: '2024-09-20',
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg',
  },
  {
    id: 9,
    name: 'Kevin Anderson',
    location: 'Verified Customer',
    rating: 5,
    text: 'I was pre-foreclosure and desperate. Florence Home Buyers offered a fair price and we closed before the foreclosure date. They literally saved my credit and my family\'s situation.',
    date: '2024-08-15',
    image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg',
  },
  {
    id: 10,
    name: 'Amanda Foster',
    location: 'Verified Customer',
    rating: 5,
    text: 'Going through a tough financial situation, I needed to sell quickly. Florence Home Buyers understood my circumstances and provided a fair, compassionate solution. Truly grateful.',
    date: '2024-08-01',
    image: 'https://images.pexels.com/photos/2709285/pexels-photo-2709285.jpeg',
  },
  {
    id: 11,
    name: 'Christopher Lee',
    location: 'Verified Customer',
    rating: 5,
    text: 'The neighborhood declined, and property value went down. Instead of losing more money listing it, I sold to Florence Home Buyers. Smart business decision on my part.',
    date: '2024-07-20',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
  },
  {
    id: 12,
    name: 'Michelle Harris',
    location: 'Verified Customer',
    rating: 5,
    text: 'After my divorce, I needed to liquidate my property quickly and fairly. Florence Home Buyers handled everything professionally and kindly. Highly recommend them to anyone!',
    date: '2024-07-10',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className='flex gap-1'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export const metadata = {
  title: 'Customer Reviews - Florence Home Buyers',
  description: 'Read real customer reviews and testimonials from homeowners who sold their properties to Florence Home Buyers.',
}

export default function Reviews() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='min-h-[400px] bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            500+ Happy Homeowners
          </h1>
          <p className='text-2xl text-emerald-600 font-bold mb-4'>Average Rating: 5.0 ⭐</p>
          <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
            We care deeply about the satisfaction of the homeowners with whom we work. Read what our customers have to say about working with Florence Home Buyers.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            What Our Customers Say
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
              >
                {/* Profile Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-full h-48 object-cover'
                />

                <div className='p-6'>
                  <StarRating rating={testimonial.rating} />
                  <p className='text-gray-700 mt-4 mb-6 leading-relaxed italic text-sm'>
                    "{testimonial.text}"
                  </p>
                  <div className='border-t border-gray-200 pt-4'>
                    <p className='font-bold text-gray-900'>{testimonial.name}</p>
                    <p className='text-sm text-gray-600'>{testimonial.location}</p>
                    <p className='text-xs text-gray-500 mt-2'>
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center'>
            <p className='text-gray-600 mb-6'>
              These are real reviews from real customers. We're proud of the trust our clients place in us.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Get Good Reviews */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            Why Customers Love Us
          </h2>

          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>We Keep Our Promises</h3>
              <ul className='space-y-4'>
                <li className='flex gap-4'>
                  <span className='text-2xl text-emerald-600 font-bold flex-shrink-0'>✓</span>
                  <div>
                    <h4 className='font-bold text-gray-900'>Fair Cash Offers</h4>
                    <p className='text-gray-600 text-sm'>We make offers based on market value, not low-ball tactics</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <span className='text-2xl text-emerald-600 font-bold flex-shrink-0'>✓</span>
                  <div>
                    <h4 className='font-bold text-gray-900'>No Hidden Costs</h4>
                    <p className='text-gray-600 text-sm'>What we quote is what you get, no surprises at closing</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <span className='text-2xl text-emerald-600 font-bold flex-shrink-0'>✓</span>
                  <div>
                    <h4 className='font-bold text-gray-900'>Fast & Professional</h4>
                    <p className='text-gray-600 text-sm'>We deliver on our promises about timelines and professionalism</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>We Actually Care</h3>
              <ul className='space-y-4'>
                <li className='flex gap-4'>
                  <span className='text-2xl text-emerald-600 font-bold flex-shrink-0'>✓</span>
                  <div>
                    <h4 className='font-bold text-gray-900'>We Listen</h4>
                    <p className='text-gray-600 text-sm'>We take time to understand your situation and needs</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <span className='text-2xl text-emerald-600 font-bold flex-shrink-0'>✓</span>
                  <div>
                    <h4 className='font-bold text-gray-900'>We're Honest</h4>
                    <p className='text-gray-600 text-sm'>If it's not a good fit, we'll tell you straight up</p>
                  </div>
                </li>
                <li className='flex gap-4'>
                  <span className='text-2xl text-emerald-600 font-bold flex-shrink-0'>✓</span>
                  <div>
                    <h4 className='font-bold text-gray-900'>We're Responsive</h4>
                    <p className='text-gray-600 text-sm'>We answer calls and messages quickly and thoroughly</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials CTA */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            Watch Customer Stories
          </h2>
          <p className='text-xl text-gray-700 mb-8 max-w-2xl mx-auto'>
            Hear directly from homeowners about their experience selling to Florence Home Buyers. Video testimonials coming soon!
          </p>
          <button className='px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors text-lg'>
            Subscribe for Video Updates
          </button>
        </div>
      </section>

      {/* Ready to Sell CTA */}
      <section className='py-16 bg-emerald-600 text-white text-center'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to Be Our Next Success Story?
          </h2>
          <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
            Get your fair cash offer today. Join our 500+ happy customers who sold quickly and fairly.
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
