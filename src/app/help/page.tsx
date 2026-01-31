'use client';

const faqs = [
  {
    q: 'How do I connect my WhatsApp?',
    a: 'Go to Dashboard → Settings → WhatsApp Connection. Click "Connect WhatsApp" and scan the QR code with your WhatsApp Business app.',
  },
  {
    q: 'What is a trigger word?',
    a: 'A trigger word is a keyword that activates an auto-reply. For example, if you set "price" as a trigger, any message containing "price" will get your auto-reply.',
  },
  {
    q: 'Can I use multiple trigger words for one reply?',
    a: 'Yes! On Growth and Business plans, you can set multiple triggers like "price, rate, cost" for the same auto-reply.',
  },
  {
    q: 'What happens if no trigger matches?',
    a: 'If no trigger matches, the message is not auto-replied. You can set up a "default" reply for unmatched messages on Growth plan.',
  },
  {
    q: 'Will customers know it\'s an auto-reply?',
    a: 'No, the reply looks like a normal WhatsApp message from you. Customers won\'t know it\'s automated.',
  },
  {
    q: 'Can I reply to customers manually?',
    a: 'Yes! Auto-reply doesn\'t block you. You can always reply manually from your WhatsApp app.',
  },
  {
    q: 'What are business hours messages?',
    a: 'You can set specific messages for when you\'re closed. Like: "Thanks for messaging! We\'re closed now. Open 9 AM tomorrow."',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Go to Settings → Subscription → Cancel Plan. You\'ll still have access until the end of your billing period.',
  },
];

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span className="font-bold text-xl">GetAutoReply</span>
          </a>
          <a href="/dashboard" className="text-green-600 hover:text-green-700 font-medium">
            Go to Dashboard →
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Help Center</h1>
        <p className="text-gray-600 mb-8">Find answers to common questions</p>

        {/* Quick Start */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-lg text-green-800 mb-4">🚀 Quick Start Guide</h2>
          <ol className="space-y-3 text-green-700">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span>Sign up with your WhatsApp number</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span>Connect your WhatsApp Business (scan QR code)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span>Add your first auto-reply (e.g., &quot;price&quot; → &quot;Check our menu...&quot;)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span>That&apos;s it! Bot will now reply automatically 24/7</span>
            </li>
          </ol>
        </div>

        {/* FAQs */}
        <h2 className="font-bold text-xl mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-8">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl shadow-sm border p-4 group">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600 border-t pt-3">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="font-bold text-lg mb-4">Still need help?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://wa.me/917349767919"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50"
            >
              <span className="text-2xl">💬</span>
              <div>
                <div className="font-medium">WhatsApp Support</div>
                <div className="text-sm text-gray-500">Chat with us directly</div>
              </div>
            </a>
            <a
              href="mailto:support@getautoreply.in"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50"
            >
              <span className="text-2xl">📧</span>
              <div>
                <div className="font-medium">Email Support</div>
                <div className="text-sm text-gray-500">support@getautoreply.in</div>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 GetAutoReply. Made with ❤️ in India
          </p>
        </div>
      </footer>
    </div>
  );
}
