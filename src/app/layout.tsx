import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'GetAutoReply - 24/7 WhatsApp Auto-Reply for Your Business',
  description: 'Never miss a customer message. Simple WhatsApp auto-reply bot for Indian businesses. Just ₹299/month.',
  keywords: 'whatsapp auto reply, whatsapp bot, business whatsapp, kirana store, small business india, whatsapp automation',
  authors: [{ name: 'GetAutoReply' }],
  openGraph: {
    title: 'GetAutoReply - WhatsApp Auto-Reply for Small Businesses',
    description: 'Never miss a customer message. Auto-reply to WhatsApp 24/7. Perfect for kirana stores, doctors, tutors. Just ₹299/month.',
    url: 'https://getautoreply.in',
    siteName: 'GetAutoReply',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetAutoReply - WhatsApp Auto-Reply for Small Businesses',
    description: 'Never miss a customer message. Auto-reply 24/7. Just ₹299/month.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💬</text></svg>" />
        <link rel="canonical" href="https://getautoreply.in" />
      </head>
      <body className="bg-white">
        {children}
        <Script 
          src="https://scripts.simpleanalyticscdn.com/latest.js" 
          strategy="afterInteractive"
        />
        <noscript>
          <img 
            src="https://queue.simpleanalyticscdn.com/noscript.gif" 
            alt="" 
            referrerPolicy="no-referrer-when-downgrade" 
          />
        </noscript>
      </body>
    </html>
  )
}
