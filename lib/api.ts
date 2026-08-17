
export async function submitContact(data: {
  name: string
  email: string
  phone: string
  subject: string
  message: string

}) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message')
  }

  return result
}

export async function submitNewsletter(email: string) {
  const res = await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  if (!res.ok) throw new Error('Newsletter subscription failed')
  return res.json()
}

export async function submitOrder(data: {
  items: { name: string; quantity: number; price: number }[]
  total: number
  customerNote?: string
}) {
  const res = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Order submission failed')
  return res.json()
}

export async function submitPartnership(data: {
  name: string
  email: string
  phone: string
  organization: string
  type: string
  location: string
  message: string
}) {
  const res = await fetch('/api/partnerships', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Partnership inquiry failed')
  return res.json()
}
