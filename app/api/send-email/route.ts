import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_GMAIL_USER,
    pass: process.env.SMTP_GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("================================")
console.log("API HIT")
console.log(body)
console.log("================================")

    const {
      type,
      name,
      email,
      phone,
      company,
      ...rest
    } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 }
      )
    }

    let subject = ""
    let adminHtml = ""
    let userMessage = ""

    switch (type) {
      case "general":
        subject = `General Inquiry - ${name}`

        adminHtml = `
          <h2>General Inquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "-"}</p>
          <p><b>Company:</b> ${company || "-"}</p>
          <hr />
          <p>${rest.message || ""}</p>
        `

        userMessage = "General Inquiry"
        break

      case "crm":
        subject = `CRM Consultation Request - ${company || name}`

        adminHtml = `
          <h2>CRM Consultation Request</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Company:</b> ${company}</p>

          <p><b>Employees:</b> ${rest.employees || "-"}</p>
          <p><b>Current System:</b> ${rest.currentSystem || "-"}</p>
        `

        userMessage = "CRM Consultation"
        break

      case "automation":
        subject = `AI Automation Inquiry - ${company || name}`

        adminHtml = `
          <h2>Automation Inquiry</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Company:</b> ${company}</p>

          <h3>Processes</h3>
          <p>${rest.processes || "-"}</p>

          <h3>Goal</h3>
          <p>${rest.goal || "-"}</p>
        `

        userMessage = "AI & Automation"
        break

      case "software":
        subject = `Software Development Inquiry - ${company || name}`

        adminHtml = `
          <h2>Software Development Inquiry</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Company:</b> ${company}</p>

          <h3>Requirements</h3>
          <p>${rest.requirements || "-"}</p>

          <p><b>Timeline:</b> ${rest.timeline || "-"}</p>
        `

        userMessage = "Custom Software Development"
        break

      default:
        return NextResponse.json(
          { error: "Invalid form type" },
          { status: 400 }
        )
    }

    // Admin Email
    console.log("Sending Admin Email...")
    await transporter.sendMail({
      from: `"TechRhym Website" <${process.env.SMTP_GMAIL_USER}>`,
      to: [
          process.env.ADMIN_EMAIL!,
          process.env.SECONDARY_EMAIL!,
          ],
      replyTo: email,
      subject,
      html: adminHtml,
    })
    console.log("Admin Email Sent Successfully")

    // Customer Confirmation Email

    await transporter.sendMail({
      from: `"TechRhym Team" <${process.env.SMTP_GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting TechRhym",
      html: `
        <div style="font-family:Arial;padding:20px">

          <h2>Hello ${name},</h2>

          <p>
            Thank you for contacting TechRhym.
          </p>

          <p>
            We have successfully received your
            <strong>${userMessage}</strong> request.
          </p>

          <p>
            Our team will review your inquiry and
            contact you within 24 hours.
          </p>

          <hr>

          <h3>Your Submitted Details</h3>

          <p>
            <b>Name:</b> ${name}<br/>
            <b>Email:</b> ${email}<br/>
            <b>Company:</b> ${company || "-"}
          </p>

          <br/>

          <p>
            Regards,<br/>
            TechRhym Team
          </p>

        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}