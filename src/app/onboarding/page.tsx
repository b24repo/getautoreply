'use client';

import { useState } from 'react';
import { templates, getTemplatesForBusiness } from '@/lib/templates';

type Step = 'business' | 'templates' | 'done';

const businessTypes = [
  { id: 'kirana', name: 'Kirana / Grocery Store', emoji: '🏪' },
  { id: 'doctor', name: 'Doctor / Clinic', emoji: '👨‍⚕️' },
  { id: 'tutor', name: 'Tutor / Coaching', emoji: '📚' },
  { id: 'salon', name: 'Salon / Spa', emoji: '💇' },
  { id: 'restaurant', name: 'Restaurant / Cafe', emoji: '🍕' },
  { id: 'other', name: 'Other Business', emoji: '🏢' },
];

export default function Onboarding() {
  const [step, setStep] = useState<Step>('business');
  const [businessType, setBusinessType] = useState('');
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

  const availableTemplates = businessType ? getTemplatesForBusiness(businessType) : [];

  const toggleTemplate = (id: string) => {
    setSelectedTemplates(prev => 
      prev.includes(id) 
        ? prev.filter(t => t !== id)
        : [...prev, id]
    );
  };

  const handleBusinessSelect = (type: string) => {
    setBusinessType(type);
    setStep('templates');
  };

  const handleComplete = () => {
    // TODO: Save to database
    console.log('Selected:', { businessType, selectedTemplates });
    setStep('done');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        
        {step === 'business' && (
          <>
            <div className="text-center mb-8">
              <span className="text-5xl">💬</span>
              <h1 className="text-2xl font-bold mt-4">Welcome to GetAutoReply!</h1>
              <p className="text-gray-500 mt-2">What type of business do you run?</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleBusinessSelect(type.id)}
                  className="p-6 border-2 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                >
                  <span className="text-3xl">{type.emoji}</span>
                  <div className="font-semibold mt-2">{type.name}</div>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 'templates' && (
          <>
            <div className="text-center mb-8">
              <button 
                onClick={() => setStep('business')}
                className="text-gray-500 mb-4"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-bold">Choose Auto-Replies</h1>
              <p className="text-gray-500 mt-2">Select templates to get started quickly</p>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto mb-6">
              {availableTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => toggleTemplate(template.id)}
                  className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                    selectedTemplates.includes(template.id)
                      ? 'border-green-500 bg-green-50'
                      : 'hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-sm font-medium">
                      &quot;{template.trigger}&quot;
                    </span>
                    {selectedTemplates.includes(template.id) && (
                      <span className="text-green-600">✓</span>
                    )}
                  </div>
                  <div className="text-gray-600 mt-2 text-sm">{template.response}</div>
                </button>
              ))}
            </div>

            <button
              onClick={handleComplete}
              disabled={selectedTemplates.length === 0}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50"
            >
              Add {selectedTemplates.length} Auto-Replies →
            </button>

            <button
              onClick={() => window.location.href = '/dashboard'}
              className="w-full mt-3 text-gray-500 py-2"
            >
              Skip for now
            </button>
          </>
        )}

        {step === 'done' && (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-2xl font-bold">You&apos;re all set!</h1>
            <p className="text-gray-500 mt-2 mb-6">
              {selectedTemplates.length} auto-replies added to your account.
            </p>
            <a
              href="/dashboard"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Go to Dashboard →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
