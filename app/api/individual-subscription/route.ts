import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subscriptionType, grindType } = body

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
      to: ['mariska@bezuri.co.za', 'hello@bezuri.co.za'],
      subject: 'New Individual Subscription Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">New Individual Subscription Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p><strong>Subscription Type:</strong> ${subscriptionType === '250g' ? 'Ritual Starter (250g) - R140/mo' : 'Half-Kilo Stack (500g) - R235/mo'}</p>
            <p><strong>Grind Type:</strong> ${grindType}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This subscription request was submitted on the Zuri website.</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@bezuri.co.za',
      to: email,
      subject: 'Your Zuri Subscription Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">Welcome to the Tribe, ${name}!</h2>
          <p>Thank you for your subscription request. We've received the following details:</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Subscription Type:</strong> ${subscriptionType === '250g' ? 'Ritual Starter (250g) - R140/mo' : 'Half-Kilo Stack (500g) - R235/mo'}</p>
            <p><strong>Grind Type:</strong> ${grindType}</p>
          </div>
          <p>Our team will contact you within 24-48 hours to finalize your subscription and arrange your first delivery.</p>
          <p style="color: #666; font-size: 12px;">This is an automated message from Zuri.</p>
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
