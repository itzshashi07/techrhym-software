import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, Zap, Brain, Code, BarChart3, MessageSquare, Smartphone, Settings, Users, Lock, Clock, TrendingUp, HardDrive, Workflow, Database } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Services | TechRhym - Zoho CRM, AI Automation & Custom Software',
  description: 'Enterprise solutions for Zoho CRM implementation, AI automation, custom software development, and digital transformation.',
}

const services = [
  {
    icon: BarChart3,
    title: 'Zoho CRM Implementation',
    description: 'End-to-end CRM deployment with full customization, data migration from existing systems, workflow automation, and comprehensive team training.'
  },
  {
    icon: Brain,
    title: 'AI & Automation Strategy',
    description: 'Strategic assessment and roadmap for AI-powered automation including process mining, automation opportunity identification, and implementation planning.'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot Development',
    description: 'Build intelligent conversational AI chatbots for customer support, lead qualification, sales assistance, and 24/7 customer engagement.'
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Business Automation',
    description: 'Automated WhatsApp campaigns, customer support automation, broadcast messaging, and conversation-based selling through WhatsApp platform.'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Bespoke web and mobile applications built with modern tech stack, scalable architecture, and tailored to your specific business requirements.'
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'Streamline internal workflows, eliminate manual data entry, automate approvals, and optimize operational efficiency across departments.'
  },
  {
    icon: Users,
    title: 'CRM Training & Adoption',
    description: 'Comprehensive training programs, change management support, user adoption strategies, and ongoing coaching for CRM and business tools.'
  },
  {
    icon: HardDrive,
    title: 'Data Migration & Integration',
    description: 'Seamless data migration from legacy systems, API integrations with existing tools, data validation, and quality assurance.'
  },
  {
    icon: Zap,
    title: 'Lead Management System',
    description: 'Intelligent lead management with automated scoring, nurturing workflows, qualification rules, and conversion optimization.'
  },
  {
    icon: TrendingUp,
    title: 'Sales Pipeline Optimization',
    description: 'Sales process redesign, pipeline health analysis, forecasting accuracy improvements, and sales team enablement programs.'
  },
  {
    icon: Settings,
    title: 'System Configuration & Setup',
    description: 'Advanced CRM configuration, custom fields, validation rules, automation logic, and system optimization for performance.'
  },
  {
    icon: Clock,
    title: 'Workflow Automation Design',
    description: 'Design and implement automated workflows for sales, marketing, customer service, and operations using industry best practices.'
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Enterprise security implementation, role-based access control, data privacy compliance, and regular security audits.'
  },
  {
    icon: Database,
    title: 'Analytics & Reporting',
    description: 'Custom dashboards, KPI tracking, predictive analytics, business intelligence insights, and data-driven decision support.'
  },
  {
    icon: Clock,
    title: 'Ongoing Support & Optimization',
    description: 'Dedicated support team, regular system optimization, performance monitoring, quarterly business reviews, and continuous improvement.'
  }
]

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative py-20 pt-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Enterprise Software Solutions</h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              15 comprehensive services covering CRM implementation, AI automation, custom software development, and operational excellence.
            </p>
          </div>
        </section>

        {/* Services Grid - 15 Cards */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={i}
                    className="group relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white hover:border-blue-300/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Why Choose TechRhym Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Expert Team', desc: 'Certified professionals with 10+ years of enterprise experience' },
                { title: 'Proven Methodology', desc: 'Industry best practices refined through hundreds of implementations' },
                { title: 'Rapid Deployment', desc: 'Efficient project management with minimal business disruption' },
                { title: 'Long-term Support', desc: 'Ongoing optimization and support included in every engagement' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-slate-200/50 hover:border-blue-300/50 transition-all">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Ready to Implement Your Solution?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Let's schedule a consultation to discuss your specific needs and how our services can drive measurable business results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all"
            >
              Schedule Your Free Consultation
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
