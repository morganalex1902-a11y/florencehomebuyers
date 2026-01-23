'use client'

import { QuickForm } from './quick-form'

interface QuickFormSectionProps {
  title?: string
  subtitle?: string
  backgroundColor?: string
  buttonText?: string
}

export function QuickFormSection({
  title = 'Get Your Free Cash Offer',
  subtitle = 'Fill out the quick form below and we\'ll send you a fair cash offer within 24 hours.',
  backgroundColor = 'bg-red-50',
  buttonText = 'Get Free Offer'
}: QuickFormSectionProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
              {title}
            </h2>
            <p className='text-xl text-foreground/80'>
              {subtitle}
            </p>
          </div>

          <div className='max-w-2xl mx-auto'>
            <QuickForm variant='inline' buttonText={buttonText} />
          </div>
        </div>
      </div>
    </section>
  )
}
