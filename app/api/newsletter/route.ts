import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // Send notification to Zuri team
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@bezuri.co.za',
      to: ['mariska@bezuri.co.za'],
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">New Newsletter Subscription</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This person subscribed to the Zuri newsletter on the website.</p>
        </div>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@bezuri.co.za',
      to: [email],
      subject: 'Welcome to the Zuri Tribe! ☕',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #DE2C00;">You're In!</h1>
          <p>Thanks for subscribing to the Zuri tribe. You'll now receive exclusive drops, cultural activations, and premium coffee updates.</p>
          <p>Get ready for bold coffee and even bolder moves.</p>
          <div style="margin: 30px 0; padding: 20px; background: #2D0A31; border-radius: 8px;">
            <p style="color: white; margin: 0;">Wake Up. Be Bold. Be Zuri.</p>
          </div>
          <p style="color: #666; font-size: 12px;">You're receiving this email because you subscribed to the Zuri newsletter.</p>
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
