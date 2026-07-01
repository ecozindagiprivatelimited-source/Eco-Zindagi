'use server'

import nodemailer from 'nodemailer'

export type ApplyState = { success: boolean; message: string } | null

export async function submitInternApplication(
  _prev: ApplyState,
  formData: FormData
): Promise<ApplyState> {
  const name     = (formData.get('name')     as string)?.trim()
  const email    = (formData.get('email')    as string)?.trim()
  const role     = (formData.get('role')     as string)?.trim()
  const message  = (formData.get('message')  as string)?.trim()

  if (!name || !email || !role || !message) {
    return { success: false, message: 'Please fill in all fields.' }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Eco Zindagi Website" <${process.env.GMAIL_USER}>`,
      to: 'ecozindagiprivatelimited@gmail.com',
      replyTo: email,
      subject: `Intern Application — ${role} — ${name}`,
      html: `
        <h2>New Intern Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role Applied For:</strong> ${role}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return { success: true, message: 'Application sent! We\'ll be in touch soon.' }
  } catch (err) {
    console.error('Intern apply email error:', err)
    return { success: false, message: 'Failed to send. Please try again or email us directly.' }
  }
}
