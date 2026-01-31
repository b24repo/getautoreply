import { NextRequest, NextResponse } from 'next/server';

// For now, we'll log to console and could later integrate with Supabase
// The form currently uses FormSubmit.co for simplicity

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, whatsapp, business_type } = body;
    
    // Validate
    if (!name || !whatsapp || !business_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Log for now (will add Supabase later)
    console.log('New waitlist signup:', { name, whatsapp, business_type });
    
    // TODO: Add to Supabase when configured
    // const { data, error } = await supabase
    //   .from('waitlist')
    //   .insert({ name, phone: whatsapp, business_type })
    //   .select()
    //   .single();
    
    // TODO: Send welcome WhatsApp message
    
    return NextResponse.json({ 
      success: true,
      message: 'Successfully joined waitlist!'
    });
    
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Health check endpoint
  return NextResponse.json({ 
    status: 'ok',
    message: 'Waitlist API is running'
  });
}
