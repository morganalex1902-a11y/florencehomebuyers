import { Phone } from 'lucide-react'

const PHONE_NUMBER = '(256) 762-1898'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-card text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 mb-12'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>
              Florence Home Buyers
            </h3>
            <p className='text-gray-400 mb-4'>
              Trusted local cash home buyers in Florence, Alabama. We buy houses as-is, pay all closing costs, and close fast.
            </p>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className='inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300'
            >
              <Phone className='w-5 h-5' />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  How It Works
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Areas We Buy In
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
          <p>
            © {currentYear} Florence Home Buyers by Jeffreys Investment Properties. All rights
            reserved.
          </p>
          <div className='flex justify-center gap-6 mt-4'>
            <a href='#' className='hover:text-white transition-colors text-sm'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-white transition-colors text-sm'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
