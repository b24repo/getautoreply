'use client';

import { useState } from 'react';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [loading, setLoading] = useState(false);

  const sendOTP = () => {
    if (phone.length >= 10) {
      setLoading(true);
      // Simulate OTP send
      setTimeout(() => {
        setLoading(false);
        setStep('otp');
      }, 1000);
    }
  };

  const verifyOTP = () => {
    if (otp.length === 6) {
      setLoading(true);
      // Simulate verification
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-5xl">💬</span>
          <h1 className="text-2xl font-bold mt-2">GetAutoReply</h1>
          <p className="text-gray-500">Login to your dashboard</p>
        </div>

        {step === 'phone' ? (
          <>
            {/* Phone Input */}
            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">WhatsApp Number</label>
              <div className="flex">
                <span className="bg-gray-100 border border-r-0 rounded-l-lg px-4 py-3 text-gray-600">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  maxLength={10}
                  className="flex-1 border rounded-r-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={sendOTP}
              disabled={phone.length < 10 || loading}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </>
        ) : (
          <>
            {/* OTP Input */}
            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">
                Enter OTP sent to +91 {phone}
              </label>
              <input
                type="text"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                maxLength={6}
                className="w-full border rounded-lg px-4 py-3 text-center text-2xl tracking-widest focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={verifyOTP}
              disabled={otp.length < 6 || loading}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>

            <button
              onClick={() => setStep('phone')}
              className="w-full mt-3 text-gray-500 py-2"
            >
              ← Change number
            </button>
          </>
        )}

        {/* Demo Mode */}
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-gray-500 text-sm mb-3">Want to try first?</p>
          <a
            href="/dashboard"
            className="text-green-600 font-medium hover:underline"
          >
            View Demo Dashboard →
          </a>
        </div>
      </div>
    </div>
  );
}
