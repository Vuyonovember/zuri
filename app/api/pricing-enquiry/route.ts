import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, tab, weight, rentMachine, price, cups } = body

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
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
      to: ['mariska@bezuri.shop', 'hello@bezuri.co.za'],
      subject: `New Pricing Enquiry: ${tab === 'individual' ? 'Individual' : 'Workplace'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">New Pricing Enquiry</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p><strong>Type:</strong> ${tab === 'individual' ? 'Individual' : 'Workplace'}</p>
            <p><strong>Volume:</strong> ${weight}kg/month</p>
            ${cups ? `<p><strong>Estimated Cups:</strong> ${cups}/month</p>` : ''}
            <p><strong>Machine Rental:</strong> ${rentMachine ? 'Yes' : 'No'}</p>
            <p><strong>Monthly Price:</strong> R${price}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This pricing enquiry was submitted on the Zuri website.</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@social.bezuri.co.za',
      to: email,
      subject: 'Your Zuri Pricing Enquiry',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">Thank you for your enquiry, ${name}!</h2>
          <p>We've received your pricing enquiry for ${tab === 'individual' ? 'individual' : 'workplace'} subscription. Our team will contact you within 24-48 hours to discuss your requirements.</p>
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
