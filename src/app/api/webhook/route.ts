import { NextRequest, NextResponse } from 'next/server';

// Webhook verification (GET)
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');
  
  const verifyToken = process.env.WHATSAPP_WEBHOOK_SECRET;
  
  if (mode === 'subscribe' && token === verifyToken) {
    console.log('Webhook verified!');
    return new NextResponse(challenge, { status: 200 });
  }
  
  return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
}

// Incoming message handler (POST)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Log for debugging
    console.log('Webhook received:', JSON.stringify(body, null, 2));
    
    // Extract message from WhatsApp Cloud API format
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;
    const messages = value?.messages;
    
    if (!messages || messages.length === 0) {
      // Status update or other event, acknowledge it
      return NextResponse.json({ status: 'ok' });
    }
    
    const message = messages[0];
    const fromPhone = message.from; // e.g., "919876543210"
    const messageText = message.text?.body || '';
    const messageType = message.type;
    
    console.log(`Message from ${fromPhone}: ${messageText}`);
    
    // Only handle text messages for now
    if (messageType !== 'text') {
      return NextResponse.json({ status: 'ok' });
    }
    
    // TODO: Look up user by WhatsApp phone number
    // TODO: Find matching auto-reply rule
    // TODO: Send reply via WhatsApp API
    // TODO: Log message in database
    
    // For now, just acknowledge
    return NextResponse.json({ status: 'ok' });
    
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// Helper: Send WhatsApp message
async function sendWhatsAppMessage(to: string, text: string) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  
  if (!phoneNumberId || !accessToken) {
    console.error('WhatsApp credentials not configured');
    return;
  }
  
  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to,
          type: 'text',
          text: { body: text },
        }),
      }
    );
    
    const data = await response.json();
    console.log('Message sent:', data);
    return data;
    
  } catch (error) {
    console.error('Failed to send message:', error);
  }
}
