import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const business_type = formData.get('business_type') as string;
    
    // Validate
    if (!name || !whatsapp || !business_type) {
      return NextResponse.redirect(new URL('/?error=missing', req.url));
    }
    
    // Save to Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert({
        name,
        phone: whatsapp,
        business_type,
      });
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.redirect(new URL('/?error=db', req.url));
    }
    
    // Success - redirect with thanks
    return NextResponse.redirect(new URL('/?thanks=1', req.url));
    
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.redirect(new URL('/?error=server', req.url));
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    message: 'Waitlist API is running'
  });
}
