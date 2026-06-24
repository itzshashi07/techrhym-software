'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

interface FormStatus {
  loading: boolean
  success: boolean
  error: string | null
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'general' | 'crm' | 'automation' | 'software'>('general')
  
  const [forms, setForms] = useState({
    general: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
    crm: {
      name: '',
      email: '',
      phone: '',
      company: '',
      employees: '',
      currentSystem: '',
    },
    automation: {
      name: '',
      email: '',
      phone: '',
      company: '',
      processes: '',
      goal: '',
    },
    software: {
      name: '',
      email: '',
      phone: '',
      company: '',
      requirements: '',
      timeline: '',
    }
  })

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    tab: 'general' | 'crm' | 'automation' | 'software'
  ) => {
    const { name, value } = e.target
    setForms(prev => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [name]: value,
      }
    }))
  }

  const handleSubmit = async (
    e: React.FormEvent,
    tab: 'general' | 'crm' | 'automation' | 'software'
  ) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
// const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           type: tab,
//           ...forms[tab]
//         })
//       })

const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: tab,
    ...forms[tab]
  })
})

const data = await response.json()

console.log("Status:", response.status)
console.log("Response:", data)


      if (response.ok) {
        setStatus({ loading: false, success: true, error: null })
        setForms(prev => ({
          ...prev,
          [tab]: Object.keys(prev[tab]).reduce((acc, key) => ({...acc, [key]: ''}), {})
        }))
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: null })
        }, 5000)
      } else {
        setStatus({ 
          loading: false, 
          success: false, 
          error: 'Failed to send form. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'An error occurred. Please try again.' 
      })
    }
  }

  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative py-20 pt-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Let&apos;s Work Together</h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the option that best describes your need, and our team will get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {[
                { id: 'general', label: 'General Inquiry' },
                { id: 'crm', label: 'CRM Implementation' },
                { id: 'automation', label: 'AI & Automation' },
                { id: 'software', label: 'Custom Software' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white border border-slate-200/50 text-slate-700 hover:border-blue-300/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Forms */}
            <div className="max-w-2xl mx-auto">
              {/* General Form */}
              {activeTab === 'general' && (
                <div className="bg-white rounded-2xl border border-slate-200/50 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">General Inquiry</h2>
                  
                  {status.success && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-900">Message sent!</p>
                        <p className="text-sm text-green-800">We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}
                  
                  {status.error && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex gap-3">
                      <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800">{status.error}</p>
                    </div>
                  )}

                  <form onSubmit={(e) => handleSubmit(e, 'general')} className="space-y-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={(forms.general as any).name}
                      onChange={(e) => handleChange(e, 'general')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={(forms.general as any).email}
                      onChange={(e) => handleChange(e, 'general')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={(forms.general as any).phone}
                      onChange={(e) => handleChange(e, 'general')}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={(forms.general as any).company}
                      onChange={(e) => handleChange(e, 'general')}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <textarea
                      name="message"
                      placeholder="Tell us about your inquiry *"
                      value={(forms.general as any).message}
                      onChange={(e) => handleChange(e, 'general')}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                    />
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status.loading ? 'Sending...' : <>Send Inquiry <Send size={18} /></>}
                    </button>
                  </form>
                </div>
              )}

              {/* CRM Form */}
              {activeTab === 'crm' && (
                <div className="bg-white rounded-2xl border border-slate-200/50 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Zoho CRM Implementation</h2>
                  
                  {status.success && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-900">Message sent!</p>
                        <p className="text-sm text-green-800">We&apos;ll contact you about CRM implementation.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={(e) => handleSubmit(e, 'crm')} className="space-y-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={(forms.crm as any).name}
                      onChange={(e) => handleChange(e, 'crm')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={(forms.crm as any).email}
                      onChange={(e) => handleChange(e, 'crm')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      value={(forms.crm as any).phone}
                      onChange={(e) => handleChange(e, 'crm')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name *"
                      value={(forms.crm as any).company}
                      onChange={(e) => handleChange(e, 'crm')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <select
                      name="employees"
                      value={(forms.crm as any).employees}
                      onChange={(e) => handleChange(e as any, 'crm')}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    >
                      <option value="">Number of Employees</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="200+">200+</option>
                    </select>
                    <input
                      type="text"
                      name="currentSystem"
                      placeholder="Current System (if any)"
                      value={(forms.crm as any).currentSystem}
                      onChange={(e) => handleChange(e, 'crm')}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status.loading ? 'Sending...' : <>Submit Request <Send size={18} /></>}
                    </button>
                  </form>
                </div>
              )}

              {/* Automation Form */}
              {activeTab === 'automation' && (
                <div className="bg-white rounded-2xl border border-slate-200/50 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">AI & Automation</h2>
                  
                  {status.success && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-900">Message sent!</p>
                        <p className="text-sm text-green-800">We&apos;ll discuss automation opportunities for your business.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={(e) => handleSubmit(e, 'automation')} className="space-y-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={(forms.automation as any).name}
                      onChange={(e) => handleChange(e, 'automation')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={(forms.automation as any).email}
                      onChange={(e) => handleChange(e, 'automation')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      value={(forms.automation as any).phone}
                      onChange={(e) => handleChange(e, 'automation')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name *"
                      value={(forms.automation as any).company}
                      onChange={(e) => handleChange(e, 'automation')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <textarea
                      name="processes"
                      placeholder="Which processes do you want to automate?"
                      value={(forms.automation as any).processes}
                      onChange={(e) => handleChange(e, 'automation')}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                    />
                    <textarea
                      name="goal"
                      placeholder="What's your main goal? (ROI, efficiency, cost reduction, etc.)"
                      value={(forms.automation as any).goal}
                      onChange={(e) => handleChange(e, 'automation')}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                    />
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status.loading ? 'Sending...' : <>Submit Request <Send size={18} /></>}
                    </button>
                  </form>
                </div>
              )}

              {/* Software Form */}
              {activeTab === 'software' && (
                <div className="bg-white rounded-2xl border border-slate-200/50 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Custom Software</h2>
                  
                  {status.success && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-900">Message sent!</p>
                        <p className="text-sm text-green-800">We&apos;ll discuss your software development needs.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={(e) => handleSubmit(e, 'software')} className="space-y-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={(forms.software as any).name}
                      onChange={(e) => handleChange(e, 'software')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={(forms.software as any).email}
                      onChange={(e) => handleChange(e, 'software')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      value={(forms.software as any).phone}
                      onChange={(e) => handleChange(e, 'software')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name *"
                      value={(forms.software as any).company}
                      onChange={(e) => handleChange(e, 'software')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <textarea
                      name="requirements"
                      placeholder="Describe your software requirements *"
                      value={(forms.software as any).requirements}
                      onChange={(e) => handleChange(e, 'software')}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                    />
                    <input
                      type="text"
                      name="timeline"
                      placeholder="Expected Timeline"
                      value={(forms.software as any).timeline}
                      onChange={(e) => handleChange(e, 'software')}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status.loading ? 'Sending...' : <>Submit Request <Send size={18} /></>}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: ['Info@techrhym.com', 'Response within 24 hours']
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: ['Available for consultations', 'Global service delivery']
                },
                {
                  icon: MapPin,
                  title: 'Service Area',
                  content: ['Serving businesses', 'Worldwide']
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="p-6 rounded-xl bg-white border border-slate-200/50 text-center">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    {item.content.map((line, j) => (
                      <p key={j} className="text-sm text-slate-600">{line}</p>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
