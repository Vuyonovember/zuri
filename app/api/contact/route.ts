import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }

    // Only initialize Resend if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@social.bezuri.co.za',
      to: ['mariska@bezuri.co.za', 'hello@bezuri.co.za'],
      subject: `New Contact Form Submission from ${name || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from the Zuri website contact form.</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@social.bezuri.co.za',
      to: email,
      subject: 'Your Message to Zuri',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">Thank you for reaching out${name ? `, ${name}` : ''}!</h2>
          <p>We've received your message and our team will get back to you within 24-48 hours.</p>
          <p style="color: #666; font-size: 12px;">This is a no-reply email. For questions, contact us at hello@bezuri.co.za</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
