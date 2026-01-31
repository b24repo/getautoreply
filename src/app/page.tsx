'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const showThanks = searchParams.get('thanks') === '1';

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💬</text></svg>" />
        <title>GetAutoReply - 24/7 WhatsApp Auto-Reply for Your Business</title>
        <meta name="description" content="Never miss a customer message. Simple WhatsApp auto-reply bot for Indian businesses. Just ₹299/month." />
        
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="GetAutoReply - WhatsApp Auto-Reply for Small Businesses" />
        <meta property="og:description" content="Never miss a customer message. Auto-reply to WhatsApp 24/7. Perfect for kirana stores, doctors, tutors. Just ₹299/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getautoreply.in" />
        <meta property="og:image" content="https://og-image.vercel.app/GetAutoReply%20-%20WhatsApp%20Auto-Reply.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GetAutoReply - WhatsApp Auto-Reply for Small Businesses" />
        <meta name="twitter:description" content="Never miss a customer message. Auto-reply 24/7. Just ₹299/month." />
        <meta name="twitter:image" content="https://og-image.vercel.app/GetAutoReply%20-%20WhatsApp%20Auto-Reply.png?theme=light&md=1&fontSize=100px" />
        
        {/* Extra SEO */}
        <meta name="keywords" content="whatsapp auto reply, whatsapp bot, business whatsapp, kirana store, small business india, whatsapp automation" />
        <meta name="author" content="GetAutoReply" />
        <link rel="canonical" href="https://getautoreply.in" />
        
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Simple Analytics - privacy-friendly, no cookie banner needed */}
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
      </head>
      <body className="bg-white">
        {/* Thank You Modal */}
        {showThanks && (
          <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md text-center animate-bounce-in">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h2>
              <p className="text-gray-600 mb-6">Thanks for joining! We&apos;ll WhatsApp you when we launch.</p>
              <a href="/" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600">
                Got it! 👍
              </a>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span className="font-bold text-xl">GetAutoReply</span>
            </div>
            <a href="#waitlist" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium">
              Join Waitlist
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
              🚀 Launching Soon - Join the Waitlist!
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Never Miss a<br />
              <span className="text-green-600">WhatsApp Message</span> Again
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Auto-reply to your customers 24/7. Simple setup. No coding needed. 
              Perfect for Kirana stores, doctors, tutors & small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#waitlist" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2">
                Join Waitlist →
              </a>
            </div>
            <p className="text-gray-500 mt-6">Starting at just <span className="font-bold text-gray-900">₹299/month</span></p>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Running a business is hard enough 😫</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl mb-3">😴</div>
                <h3 className="font-semibold text-lg mb-2">Customers message at 11 PM</h3>
                <p className="text-gray-600">You&apos;re sleeping. They go to your competitor.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl mb-3">🔁</div>
                <h3 className="font-semibold text-lg mb-2">Same questions 50x a day</h3>
                <p className="text-gray-600">&quot;Price kya hai?&quot; &quot;Timing?&quot; &quot;Location?&quot; - Exhausting!</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-lg mb-2">Too busy to reply</h3>
                <p className="text-gray-600">Serving customers in shop, can&apos;t check WhatsApp.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-3xl mb-3">💸</div>
                <h3 className="font-semibold text-lg mb-2">Lost sales</h3>
                <p className="text-gray-600">Miss one message = lose one customer forever.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">GetAutoReply handles it automatically ✨</h2>
            <p className="text-xl text-gray-600 mb-12">Set it up once, works forever</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">1</div>
                <h3 className="font-semibold text-lg mb-2">Connect WhatsApp</h3>
                <p className="text-gray-600">Scan QR code. Done in 30 seconds.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">2</div>
                <h3 className="font-semibold text-lg mb-2">Add Auto-Replies</h3>
                <p className="text-gray-600">&quot;price&quot; → &quot;Menu: bit.ly/menu&quot;</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">3</div>
                <h3 className="font-semibold text-lg mb-2">Bot Replies 24/7</h3>
                <p className="text-gray-600">You sleep. Bot works. Customers happy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Simple Pricing 💰</h2>
            <p className="text-xl text-gray-600 mb-12">No hidden fees. Cancel anytime.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-200">
                <h3 className="font-bold text-xl mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-1">₹299<span className="text-lg font-normal text-gray-500">/month</span></div>
                <p className="text-gray-500 mb-6">Perfect for small shops</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 5 auto-replies</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 500 messages/month</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Business hours message</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> WhatsApp support</li>
                </ul>
                <a href="#waitlist" className="block w-full bg-gray-100 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-200">
                  Join Waitlist
                </a>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="font-bold text-xl mb-2">Growth</h3>
                <div className="text-4xl font-bold mb-1">₹499<span className="text-lg font-normal text-gray-500">/month</span></div>
                <p className="text-gray-500 mb-6">For growing businesses</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 20 auto-replies</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 2000 messages/month</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Welcome message</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Priority support</li>
                </ul>
                <a href="#waitlist" className="block w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600">
                  Join Waitlist
                </a>
              </div>
            </div>
            <p className="text-gray-500 mt-8">🎁 Early supporters get 1 month FREE + lifetime discount!</p>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-20 bg-gradient-to-br from-green-500 to-green-700 px-4">
          <div className="max-w-xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist 🚀</h2>
            <p className="text-xl opacity-90 mb-8">Be first to get access. Early supporters get 1 month FREE!</p>
            <form className="space-y-4" action="https://formsubmit.co/virendra.vaishnav@gmail.com" method="POST">
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="🚀 New GetAutoReply Waitlist Signup!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://getautoreply.in?thanks=1" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-6 py-4 rounded-full text-gray-900 text-lg" />
              <input type="tel" name="whatsapp" placeholder="WhatsApp Number" required className="w-full px-6 py-4 rounded-full text-gray-900 text-lg" />
              <select name="business_type" required className="w-full px-6 py-4 rounded-full text-gray-900 text-lg">
                <option value="">Select Business Type</option>
                <option value="kirana">Kirana / Grocery Store</option>
                <option value="doctor">Doctor / Clinic</option>
                <option value="tutor">Tutor / Coaching</option>
                <option value="salon">Salon / Spa</option>
                <option value="restaurant">Restaurant / Cafe</option>
                <option value="retail">Retail Shop</option>
                <option value="other">Other</option>
              </select>
              <button type="submit" className="w-full bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl">
                Join Waitlist →
              </button>
            </form>
            <p className="text-sm opacity-75 mt-6">🔒 No spam. We&apos;ll only message you when we launch.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">💬</span>
              <span className="font-bold text-xl">GetAutoReply</span>
            </div>
            <p className="text-gray-400 mb-6">24/7 WhatsApp Auto-Reply for Indian Businesses</p>
            <p className="text-gray-500 text-sm">Made with ❤️ in India</p>
            <p className="text-gray-600 text-sm mt-4">© 2026 GetAutoReply. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
