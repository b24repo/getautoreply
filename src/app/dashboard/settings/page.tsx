'use client';

import { useState } from 'react';

export default function Settings() {
  const [businessName, setBusinessName] = useState('My Business');
  const [businessHours, setBusinessHours] = useState('9 AM - 9 PM');
  const [afterHoursMessage, setAfterHoursMessage] = useState(
    'Thanks for your message! We are currently closed. We will reply when we open.'
  );
  const [welcomeMessage, setWelcomeMessage] = useState(
    'Namaste! Welcome to our business. How can we help you today?'
  );
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: Save to database
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/dashboard" className="text-gray-500 hover:text-gray-700">
              ← Back
            </a>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              <span className="font-bold text-xl">Settings</span>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600"
          >
            {saved ? '✓ Saved!' : 'Save Changes'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Business Info */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">Business Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Business Hours</label>
              <input
                type="text"
                value={businessHours}
                onChange={(e) => setBusinessHours(e.target.value)}
                placeholder="e.g., 9 AM - 9 PM, Mon-Sat"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Auto Messages */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">Automatic Messages</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Welcome Message
                <span className="text-gray-400 ml-2">(sent to first-time contacts)</span>
              </label>
              <textarea
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                After Hours Message
                <span className="text-gray-400 ml-2">(sent outside business hours)</span>
              </label>
              <textarea
                value={afterHoursMessage}
                onChange={(e) => setAfterHoursMessage(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* WhatsApp Connection */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">WhatsApp Connection</h2>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <div className="font-semibold">+91 98765 43210</div>
                <div className="text-sm text-green-600">Connected & Active</div>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-700 font-medium">
              Disconnect
            </button>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">Subscription</h2>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Growth Plan</div>
              <div className="text-sm text-gray-500">₹499/month • Renews Feb 28, 2026</div>
            </div>
            <a href="/pricing" className="text-green-600 hover:text-green-700 font-medium">
              Change Plan
            </a>
          </div>
          
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Messages used</span>
              <span className="font-medium">1,234 / 2,000</span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '62%' }} />
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
          <h2 className="font-bold text-lg text-red-600 mb-4">Danger Zone</h2>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Delete Account</div>
              <div className="text-sm text-gray-500">Permanently delete your account and all data</div>
            </div>
            <button className="text-red-500 hover:text-red-700 font-medium border border-red-300 px-4 py-2 rounded-lg hover:bg-red-50">
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
