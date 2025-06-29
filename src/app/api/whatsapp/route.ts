import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { body, recipient } = await request.json()

    const response = await fetch('https://wappi.pro/api/sync/message/send?profile_id=cbdbe806-b360', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': '270d935319ba47dcd6de2886c86e16b5055d792b',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: body,
        recipient: recipient
      })
    })

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json({ 
      success: true, 
      data: data 
    })

  } catch (error) {
    console.error('WhatsApp API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send WhatsApp message' },
      { status: 500 }
    )
  }
} 