import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'About TechRhym | Technology Solutions Company',
  description: 'Learn about TechRhym&apos;s mission, values, and expertise in Zoho CRM, AI automation, and digital transformation.',
}

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
    },
    {
      title: 'Excellence',
      description: 'We deliver quality work that exceeds expectations every single time.'
    },
    {
      title: 'Partnership',
      description: 'Your success is our success. We work as an extension of your team.'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and accountability.'
    }
  ]

  const team = [
    { name: 'Shashi Kumar', role: 'Founder & CEO', expertise: 'Zoho CRM Expert' },
    { name: 'Arjun Sharma', role: 'Technical Lead', expertise: 'Custom Development' },
    { name: 'Meera Patel', role: 'Solutions Architect', expertise: 'System Integration' },
    { name: 'Rohit Singh', role: 'Lead Developer', expertise: 'AI & Automation' }
  ]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-64 bg-gradient-to-r from-primary/5 to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-foreground mb-4">About TechRhym</h1>
              <p className="text-xl text-muted-foreground">
                We&apos;re a team of passionate technology experts dedicated to transforming businesses through innovative digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At TechRhym, our mission is to empower businesses of all sizes with cutting-edge technology solutions that streamline operations, enhance productivity, and drive sustainable growth.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We believe that technology should be accessible, practical, and transformative. Our goal is to be your trusted partner in navigating the digital landscape and achieving your business objectives.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you&apos;re implementing CRM, automating processes, or developing custom solutions, we bring expertise, dedication, and a commitment to your success.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="font-bold text-foreground text-lg mb-6">Why Choose TechRhym?</h3>
                <ul className="space-y-4">
                  {[
                    'Proven expertise with 15+ years of experience',
                    'Certified professionals and industry experts',
                    '100+ successful projects delivered',
                    'Customized solutions for your specific needs',
                    'Ongoing support and continuous improvement',
                    'Transparent communication and collaboration'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <div key={i} className="p-8 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Journey</h2>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                { year: '2021', title: 'Founded', description: 'TechRhym was established with a vision to transform businesses through technology.' },
                { year: '2022', title: 'Zoho Expertise', description: 'Became certified Zoho CRM partner, helping 100+ businesses implement CRM.' },
                { year: '2023', title: 'Expanded Services', description: 'Added custom software development and AI automation services.' },
                { year: '2024', title: 'Digital Transformation', description: 'Launched comprehensive digital transformation consulting practice.' },
                { year: '2025', title: 'Growth & Recognition', description: 'Recognized as a leading technology solutions provider with 250+ projects.' },
                { year: '2026', title: 'Innovation Focus', description: 'Expanding AI and automation services to help more businesses evolve.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <p className="text-2xl font-bold text-primary">{item.year}</p>
                  </div>
                  <div className="pb-8 border-l-2 border-border pl-6 relative">
                    <div className="w-4 h-4 rounded-full bg-primary absolute -left-2.5 -top-2" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Expert Team</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-xs text-primary font-semibold bg-primary/10 inline-block px-3 py-1 rounded-full">
                    {member.expertise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Zoho Ecosystem', skills: ['CRM Implementation', 'Workflow Automation', 'Custom Modules', 'API Integration', 'Data Migration'] },
                { title: 'Technology Stack', skills: ['Python', 'JavaScript', 'React', 'Node.js', 'Cloud Platforms'] },
                { title: 'Industry Knowledge', skills: ['Manufacturing', 'E-commerce', 'Real Estate', 'Logistics', 'EdTech'] }
              ].map((area, i) => (
                <div key={i} className="p-8 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.skills.map((skill, j) => (
                      <li key={j} className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your business? Get in touch with our team to discuss your project and goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
