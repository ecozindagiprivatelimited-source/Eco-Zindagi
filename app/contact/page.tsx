'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_MAPS_URL,
  WHATSAPP_DISPLAY,
  whatsappUrl,
} from '@/lib/contact'
import { submitContact } from '@/lib/api'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
   await submitContact({
  ...formData,
  // formType: 'contact',
})
    // Email successfully sent
    setSubmitted(true)

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)

  } catch (error) {
    console.error('Failed to send contact form:', error)

    alert('Failed to send your message. Please try again.')
  }
}

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4 sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a question? We&apos;d love to hear from you. Contact us anytime!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  We respond within 24 hours
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Chat with us for quick support
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Eco Zindagi HQ
                  <br />
                  <a
                    href={CONTACT_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {CONTACT_LOCATION}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9am - 6pm PKT
                  <br />
                  Saturday: 10am - 4pm PKT
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/20 text-primary rounded-lg">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+92 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all active:scale-95"
                  >
                     Send Message
                  </button>
                </form>

                {/* <p className="text-xs text-muted-foreground mt-4 text-center">
                  This will open WhatsApp to send your message directly to our team.
                </p> */}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">FAQs</h2>
            <div className="space-y-6">
              <FAQItem
                question="What is your return policy?"
                answer="We offer 30 days easy returns on all products. If you&apos;re not satisfied, contact us via WhatsApp and we&apos;ll arrange a return."
              />
              <FAQItem
                question="How do you ensure product quality?"
                answer="All our products are certified organic and eco-friendly. We personally test each product before offering it and work only with certified suppliers."
              />
              <FAQItem
                question="Do you offer bulk orders?"
                answer="Yes! We offer special pricing for bulk orders. Please contact us via WhatsApp with your requirements."
              />
              <FAQItem
                question="How is shipping handled?"
                answer="We ship across Pakistan. Most orders are delivered within 5–7 business days in major cities."
              />
              <FAQItem
                question="Are your products actually eco-friendly?"
                answer="Absolutely. Every product comes with certifications. We track our environmental impact and report it transparently on our website."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center bg-card hover:bg-muted transition-colors"
      >
        <span className="font-semibold text-foreground text-left">{question}</span>
        <svg
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  )
}
