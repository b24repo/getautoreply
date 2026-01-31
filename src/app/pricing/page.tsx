'use client';

const plans = [
  {
    name: 'Free Trial',
    price: '₹0',
    period: '7 days',
    features: [
      '3 auto-replies',
      '100 messages',
      'Basic support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Starter',
    price: '₹299',
    period: '/month',
    features: [
      '5 auto-replies',
      '500 messages/month',
      'Business hours message',
      'WhatsApp support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹499',
    period: '/month',
    features: [
      '20 auto-replies',
      '2000 messages/month',
      'Welcome message',
      'Message analytics',
      'Priority support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Business',
    price: '₹999',
    period: '/month',
    features: [
      'Unlimited auto-replies',
      '5000 messages/month',
      'Multiple keywords per reply',
      'Custom branding',
      'API access',
      'Dedicated support',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span className="font-bold text-xl">GetAutoReply</span>
          </a>
          <a href="/login" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium">
            Login
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Affordable Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-6 ${
                plan.popular 
                  ? 'border-2 border-green-500 shadow-lg relative' 
                  : 'border shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={plan.name === 'Free Trial' ? '/onboarding' : '#waitlist'}
                className={`block w-full py-3 rounded-lg font-semibold text-center ${
                  plan.popular
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">What counts as a message?</h3>
              <p className="text-gray-600">
                Each auto-reply sent counts as one message. Customer messages don&apos;t count.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">
                Yes! Upgrade or downgrade anytime. Changes apply immediately.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">
                No setup fee. No hidden charges. Just the monthly price.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                UPI, debit/credit cards, net banking via Razorpay.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 GetAutoReply. Made with ❤️ in India
          </p>
        </div>
      </footer>
    </div>
  );
}
