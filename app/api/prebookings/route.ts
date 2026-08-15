import { NextResponse } from 'next/server'

export async function GET() {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

  if (!url) {
    console.error('NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not set')
    return NextResponse.json(
      { error: 'Google Script URL is not configured' },
      { status: 500 }
    )
  }

  try {
    const res = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`Google Script returned status ${res.status}`)
    }

    const data = await res.json()

    console.log('Google Script response:', data)

    // Google Apps Script returns:
    // { success: true, totalSlots: 50, prebookings: 23, availableSlots: 27 }

    if (typeof data.prebookings === 'number') {
      return NextResponse.json({
        count: data.prebookings,
      })
    }

    throw new Error('Google Script response does not contain prebookings count')
  } catch (error) {
    console.error('Error fetching prebookings from Google Sheets:', error)

    return NextResponse.json(
      {
        error: 'Failed to fetch prebooking count',
      },
      { status: 500 }
    )
  }
}