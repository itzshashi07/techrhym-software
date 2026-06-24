import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata = {
  title: 'Blog | Techrhym - Zoho CRM, AI & Business Automation Insights',
  description: 'Expert insights on Zoho CRM implementation, AI automation, business process optimization, and digital transformation strategies.',
}

const posts = [
  {
    slug: 'zoho-crm-implementation-best-practices',
    title: 'Zoho CRM Implementation: Best Practices & Common Mistakes',
    excerpt: 'Learn the proven methodology for successful Zoho CRM implementation, including planning, configuration, data migration, and user adoption strategies.',
    author: 'Shashi Singh',
    date: 'March 15, 2024',
    category: 'Zoho CRM',
    image: '🎯',
    readTime: '8 min read'
  },
  {
    slug: 'ai-chatbots-customer-support',
    title: 'AI Chatbots for Customer Support: ROI & Implementation Guide',
    excerpt: 'Discover how AI chatbots can reduce support costs by 50%, improve response times, and deliver 24/7 customer service without scaling your team.',
    author: 'Priya Sharma',
    date: 'March 10, 2024',
    category: 'AI Automation',
    image: '💬',
    readTime: '6 min read'
  },
  {
    slug: 'business-process-automation-guide',
    title: 'Complete Guide to Business Process Automation (BPA)',
    excerpt: 'Transform manual workflows into intelligent automated processes. Learn which processes to automate first and how to measure success.',
    author: 'Rajesh Kumar',
    date: 'March 5, 2024',
    category: 'Automation',
    image: '⚙️',
    readTime: '10 min read'
  },
  {
    slug: 'lead-scoring-automation-sales',
    title: 'Lead Scoring Automation: Increase Sales Conversion by 40%',
    excerpt: 'Implement intelligent lead scoring to prioritize high-value prospects, reduce sales cycle time, and improve team productivity.',
    author: 'Meera Patel',
    date: 'February 28, 2024',
    category: 'Sales',
    image: '📊',
    readTime: '7 min read'
  },
  {
    slug: 'whatsapp-business-automation',
    title: 'WhatsApp Business Automation: Reaching Customers Where They Are',
    excerpt: 'Automate customer communication through WhatsApp for lead generation, customer service, and sales with higher engagement rates.',
    author: 'Anil Singh',
    date: 'February 20, 2024',
    category: 'Marketing',
    image: '📱',
    readTime: '6 min read'
  },
  {
    slug: 'digital-transformation-roadmap',
    title: 'Digital Transformation Roadmap: 5 Steps to Transform Your Business',
    excerpt: 'Strategic guide to planning and executing digital transformation initiatives. Includes assessment, planning, implementation, and optimization phases.',
    author: 'Deepak Verma',
    date: 'February 15, 2024',
    category: 'Strategy',
    image: '🚀',
    readTime: '9 min read'
  }
]

export default function Blog() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative py-20 pt-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Techrhym Blog</h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Expert insights on Zoho CRM, AI automation, business process optimization, and digital transformation strategies.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <Link
                  key={i}
                  href={`/blog/${post.slug}`}
                  className="group relative h-full rounded-2xl overflow-hidden bg-white border border-slate-200/50 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-full flex flex-col p-8">
                    {/* Image */}
                    <div className="w-full h-40 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 text-5xl">
                      {post.image}
                    </div>

                    {/* Category */}
                    <div className="inline-block mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100/50 text-blue-700">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="border-t border-slate-200 pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="text-xs text-blue-600 font-semibold">{post.readTime}</div>
                    </div>
                  </div>
                </Link>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Learn from our experts how to implement these strategies in your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all"
            >
              Schedule Free Consultation
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
