import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Eco Zindagi Website <onboarding@resend.dev>',
      to: ['ecozindagiprivatelimited@gmail.com'],
      replyTo: email,
      subject: `Eco Zindagi Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          
          <h2 style="color: #4d8c2f;">
            New Contact Form Submission
          </h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone || 'Not provided'}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <h3>Message</h3>

          <p style="white-space: pre-line;">
            ${message}
          </p>

          <hr />

          <p style="font-size: 12px; color: #777;">
            This message was submitted through the Eco Zindagi website.
          </p>

        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)

      return NextResponse.json(
        { error: 'Failed to send email.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully.',
        id: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)

    return NextResponse.json(
      { error: 'Something went wrong while sending the email.' },
      { status: 500 }
    )
  }
}