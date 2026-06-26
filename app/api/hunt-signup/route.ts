import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Send notification to Zuri team
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@bezuri.co.za',
      to: ['hello@bezuri.co.za'],
      subject: `New Hunt Sign-up: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">New Hunt Sign-up</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This person signed up for the hunt on the Zuri website.</p>
        </div>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@bezuri.co.za',
      to: [email],
      subject: 'Welcome to the Zuri Hunt! 🎯',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #DE2C00;">You're In!</h1>
          <p>Thanks for signing up for the Zuri Hunt. Get ready for an exciting experience.</p>
          <p>We'll be in touch soon with more details about upcoming hunts and exclusive drops.</p>
          <div style="margin: 30px 0; padding: 20px; background: #2D0A31; border-radius: 8px;">
            <p style="color: white; margin: 0;">Wake Up. Be Bold. Be Zuri.</p>
          </div>
          <p style="color: #666; font-size: 12px;">You're receiving this email because you signed up for the Zuri Hunt.</p>
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
