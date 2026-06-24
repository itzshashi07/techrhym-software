import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export const metadata = {
  title: 'Our Clients | Techrhym',
  description: 'See how businesses like yours have transformed operations with Techrhym solutions. Client testimonials and case studies.',
}

const clients = [
  { name: 'Able Insurance', logo: 'Able' },
  { name: 'Brandsumo', logo: 'Brand' },
  { name: 'IT Legends', logo: 'IT' },
  { name: 'Brahma Journal', logo: 'BJ' }
]

const testimonials = [
  {
    company: 'Able Insurance',
    text: 'Techrhym transformed our sales process completely. Lead management improved by 45% and our sales cycle reduced from 30 days to 18 days.',
    author: 'Rajesh Kumar',
    role: 'Sales Director',
    rating: 5
  },
  {
    company: 'Brandsumo',
    text: 'The custom software solution they built saved us 20 hours of manual work every week. ROI was achieved within 3 months.',
    author: 'Priya Sharma',
    role: 'Operations Head',
    rating: 5
  },
  {
    company: 'IT Legends',
    text: 'Their AI chatbot implementation reduced customer support tickets by 40%. Incredible professional team with deep expertise.',
    author: 'Anil Singh',
    role: 'Customer Success Manager',
    rating: 5
  },
  {
    company: 'Brahma Journal',
    text: 'Going from spreadsheets to Zoho CRM was seamless. Techrhym handled everything and provided excellent training. Highly recommend!',
    author: 'Meera Patel',
    role: 'Business Manager',
    rating: 5
  }
]

export default function Clients() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative py-20 pt-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Trusted by Leading Companies</h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Organizations across industries rely on Techrhym to transform their operations, automate processes, and drive measurable growth.
            </p>
          </div>
        </section>

        {/* Clients Logos */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-2xl font-bold text-slate-900 mb-16">Our Clients</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white hover:border-blue-300/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-blue-600 text-lg">{client.logo}</span>
                    </div>
                    <p className="font-bold text-slate-900 text-sm">{client.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-4">Client Testimonials</h2>
            <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
              Hear from companies that have transformed their business with Techrhym solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-slate-200/50 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Video Testimonials</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                          <div className="triangle w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1" />
                        </div>
                      </div>
                      <p className="text-white font-bold">Client Testimonial {i}</p>
                      <p className="text-white/70 text-sm mt-2">Available upon request</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Impact by Numbers</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: '100+', label: 'Business Implementations' },
                { metric: '40-60%', label: 'Average Efficiency Gain' },
                { metric: '3x', label: 'Faster Business Processes' },
                { metric: '95%', label: 'Client Satisfaction Rate' }
              ].map((result, i) => (
                <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50 text-center">
                  <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">{result.metric}</p>
                  <p className="text-slate-600 font-semibold">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Let's discuss how Techrhym can transform your business and create measurable impact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all"
            >
              Schedule Your Consultation
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
