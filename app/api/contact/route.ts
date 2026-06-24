import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, name, email, phone, company, ...rest } = body

    // Determine email template based on type
    let emailContent = ''
    let subject = ''

    switch (type) {
      case 'general':
        subject = `New General Inquiry from ${name}`
        emailContent = `
          <h2>New General Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${(rest.message || '').replace(/\n/g, '<br>')}</p>
        `
        break

      case 'crm':
        subject = `Zoho CRM Implementation Request from ${company || name}`
        emailContent = `
          <h2>Zoho CRM Implementation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Employees:</strong> ${rest.employees || 'Not specified'}</p>
          <p><strong>Current System:</strong> ${rest.currentSystem || 'Not using any system'}</p>
        `
        break

      case 'automation':
        subject = `AI & Automation Inquiry from ${company || name}`
        emailContent = `
          <h2>AI & Automation Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Processes to Automate:</strong></p>
          <p>${(rest.processes || '').replace(/\n/g, '<br>')}</p>
          <p><strong>Main Goal:</strong></p>
          <p>${(rest.goal || '').replace(/\n/g, '<br>')}</p>
        `
        break

      case 'software':
        subject = `Custom Software Request from ${company || name}`
        emailContent = `
          <h2>Custom Software Development Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Requirements:</strong></p>
          <p>${(rest.requirements || '').replace(/\n/g, '<br>')}</p>
          <p><strong>Expected Timeline:</strong> ${rest.timeline || 'Not specified'}</p>
        `
        break

      default:
        return NextResponse.json(
          { error: 'Invalid inquiry type' },
          { status: 400 }
        )
    }

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL || 'info@techrhym.com'
    
    const result = await resend.emails.send({
      from: 'TechRhym <onboarding@resend.dev>',
      to: adminEmail,
      subject,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            ${emailContent}
            <hr style="margin-top: 20px;">
            <p style="font-size: 12px; color: #666;">
              This is an automated message from TechRhym website contact form.
            </p>
          </body>
        </html>
      `
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'TechRhym <onboarding@resend.dev>',
      to: email,
      subject: 'We received your inquiry - TechRhym',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2>Thank you for your inquiry, ${name}!</h2>
            <p>We've received your message and our team will get back to you within 24 hours.</p>
            <p>If you have any urgent questions, please feel free to reach out directly:</p>
            <p>
              <strong>Email:</strong> info@techrhym.com<br>
              <strong>Phone:</strong> Available for consultations
            </p>
            <p>Best regards,<br>The TechRhym Team</p>
          </body>
        </html>
      `
    })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
