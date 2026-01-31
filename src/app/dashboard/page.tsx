'use client';

import { useState } from 'react';

interface AutoReply {
  id: string;
  trigger: string;
  response: string;
  isActive: boolean;
}

export default function Dashboard() {
  const [autoReplies, setAutoReplies] = useState<AutoReply[]>([
    { id: '1', trigger: 'price', response: 'Check our menu: bit.ly/menu', isActive: true },
    { id: '2', trigger: 'timing', response: 'We are open 9 AM - 9 PM, Mon-Sat', isActive: true },
    { id: '3', trigger: 'location', response: 'Shop No 12, Main Market, Near Bus Stand', isActive: false },
  ]);

  const [newTrigger, setNewTrigger] = useState('');
  const [newResponse, setNewResponse] = useState('');

  const addReply = () => {
    if (newTrigger && newResponse) {
      setAutoReplies([
        ...autoReplies,
        { id: Date.now().toString(), trigger: newTrigger, response: newResponse, isActive: true }
      ]);
      setNewTrigger('');
      setNewResponse('');
    }
  };

  const toggleReply = (id: string) => {
    setAutoReplies(autoReplies.map(r => 
      r.id === id ? { ...r, isActive: !r.isActive } : r
    ));
  };

  const deleteReply = (id: string) => {
    setAutoReplies(autoReplies.filter(r => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span className="font-bold text-xl">GetAutoReply</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Demo Mode</span>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              V
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl font-bold text-green-600">156</div>
            <div className="text-gray-600 text-sm">Messages Today</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl font-bold text-blue-600">89%</div>
            <div className="text-gray-600 text-sm">Auto-Replied</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl font-bold text-purple-600">{autoReplies.filter(r => r.isActive).length}</div>
            <div className="text-gray-600 text-sm">Active Rules</div>
          </div>
        </div>

        {/* WhatsApp Connection */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <div className="font-semibold">WhatsApp Connected</div>
                <div className="text-sm text-gray-500">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* Add New Auto-Reply */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
          <h2 className="font-bold text-lg mb-4">➕ Add New Auto-Reply</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">When message contains:</label>
              <input
                type="text"
                placeholder="e.g., price, timing, menu"
                value={newTrigger}
                onChange={(e) => setNewTrigger(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Reply with:</label>
              <input
                type="text"
                placeholder="e.g., Check our menu at..."
                value={newResponse}
                onChange={(e) => setNewResponse(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={addReply}
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600"
          >
            Add Auto-Reply
          </button>
        </div>

        {/* Auto-Reply List */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-4 border-b bg-gray-50">
            <h2 className="font-bold text-lg">📋 Your Auto-Replies</h2>
          </div>
          <div className="divide-y">
            {autoReplies.map((reply) => (
              <div key={reply.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-sm font-medium">
                      &quot;{reply.trigger}&quot;
                    </span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <div className="text-gray-600">{reply.response}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleReply(reply.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      reply.isActive 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {reply.isActive ? '✓ Active' : 'Paused'}
                  </button>
                  <button
                    onClick={() => deleteReply(reply.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          Need help? WhatsApp us at +91 7349767919
        </div>
      </main>
    </div>
  );
}
