'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Zap, Brain, Code, TrendingUp, Users, CheckCircle, BarChart3, Sparkles, Workflow, Shield } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          
          <div className="mx-auto max-w-7xl w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="space-y-6 animate-fade-up">
                  <div className="inline-block">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Enterprise Automation Platform
                    </span>
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight text-foreground">
                    <span className="text-gradient">Transform</span> Your Business Operations
                  </h1>

                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    AI-powered automation, intelligent CRM systems, and custom software solutions that eliminate manual work and unlock growth.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { label: '100+', desc: 'Businesses Transformed' },
                    { label: '50%', desc: 'Avg Efficiency Gain' },
                    { label: '24h', desc: 'Avg Response Time' },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.desc}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass text-foreground font-semibold hover:bg-secondary transition-all"
                  >
                    View Solutions
                  </Link>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative hidden lg:block h-96 lg:h-full min-h-96">
                <div className="absolute inset-0 rounded-3xl glass-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-5" />
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="space-y-4 w-full">
                      {/* Mock dashboard */}
                      <div className="h-16 bg-white/50 rounded-xl backdrop-blur animate-pulse" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-primary/10 rounded-lg animate-pulse" />
                        <div className="h-20 bg-accent/10 rounded-lg animate-pulse" style={{ animationDelay: '0.1s' }} />
                        <div className="h-20 bg-primary/10 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="h-20 bg-accent/10 rounded-lg animate-pulse" style={{ animationDelay: '0.3s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
                Complete Enterprise Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From CRM implementation to AI automation and custom software, we provide comprehensive solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: 'Zoho CRM',
                  desc: 'End-to-end CRM implementation with custom workflows, data migration, and team training.',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: Brain,
                  title: 'AI Automation',
                  desc: 'Intelligent chatbots, process automation, and AI-powered business workflows.',
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  icon: Code,
                  title: 'Custom Software',
                  desc: 'Tailored web and mobile applications built with modern tech stack.',
                  color: 'from-cyan-500 to-cyan-600',
                },
              ].map((service, i) => {
                const Icon = service.icon
                return (
                  <Link
                    key={i}
                    href="/services"
                    className="group glass-card rounded-2xl p-8 hover:border-primary hover:shadow-elegant transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold font-display text-foreground">
                  Why Choose TechRhym
                </h2>
                <div className="space-y-6">
                  {[
                    { title: 'Expert Team', desc: 'Certified professionals with 10+ years enterprise experience' },
                    { title: 'Proven Results', desc: '100+ successful implementations with 95% client satisfaction' },
                    { title: 'Fast Deployment', desc: 'Rapid implementation with minimal business disruption' },
                    { title: 'Ongoing Support', desc: 'Dedicated support team for continuous optimization' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative h-96">
                <div className="absolute inset-0 rounded-3xl glass-card p-8">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '100+', label: 'Implementations' },
                { value: '95%', label: 'Satisfaction Rate' },
                { value: '50%', label: 'Avg Efficiency Gain' },
                { value: '24h', label: 'Response Time' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
            <div className="relative glass-card rounded-3xl p-12 text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join 100+ companies that have streamlined operations and unlocked growth with TechRhym solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
