'use client'

export function CTABannerSection() {
  const handleGetStarted = () => {
    const element = document.getElementById('form-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='py-12 bg-blue-700'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white mb-4'>
            See what we can offer you for your house...
          </h2>
          <p className='text-blue-100 mb-8'>
            Send us some basic details about your home and we'll get back to you quickly with a fair cash offer.
          </p>
          <button 
            onClick={handleGetStarted}
            className='px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 active:scale-95 transition-all shadow-lg hover:shadow-xl'
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
