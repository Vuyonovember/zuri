import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, employees, cupsPerDay, daysPerWeek, includeMachine, comments, industry } = body

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
      from: process.env.RESEND_FROM_EMAIL || 'hello@social.bezuri.co.za',
      to: ['mariska@bezuri.shop', 'hello@bezuri.co.za'],
      subject: 'New Partnership Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">New Partnership Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Industry:</strong> ${industry || 'Not specified'}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p><strong>Number of Employees:</strong> ${employees}</p>
            <p><strong>Cups per Day (per employee):</strong> ${cupsPerDay}</p>
            <p><strong>Days per Week at Office:</strong> ${daysPerWeek}</p>
            <p><strong>Include Machine Rental:</strong> ${includeMachine ? 'Yes' : 'No'}</p>
            <p><strong>Estimated Daily Consumption:</strong> ${employees * cupsPerDay} cups</p>
            <p><strong>Estimated Weekly Consumption:</strong> ${employees * cupsPerDay * daysPerWeek} cups</p>
            ${comments ? `<p><strong>Additional Comments:</strong></p><p style="white-space: pre-wrap;">${comments}</p>` : ''}
          </div>
          <p style="color: #666; font-size: 12px;">This partnership request was submitted on the Zuri website.</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@social.bezuri.co.za',
      to: email,
      subject: 'Your Zuri Partnership Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #DE2C00;">Thank you for your interest, ${name}!</h2>
          <p>We've received your partnership request. Our team will review your details and contact you within 24-48 hours to discuss next steps.</p>
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
