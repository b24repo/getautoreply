'use client';

// Demo analytics data
const weeklyData = [
  { day: 'Mon', messages: 45, autoReplied: 38 },
  { day: 'Tue', messages: 52, autoReplied: 48 },
  { day: 'Wed', messages: 38, autoReplied: 35 },
  { day: 'Thu', messages: 65, autoReplied: 58 },
  { day: 'Fri', messages: 72, autoReplied: 65 },
  { day: 'Sat', messages: 88, autoReplied: 80 },
  { day: 'Sun', messages: 34, autoReplied: 30 },
];

const topTriggers = [
  { trigger: 'price', count: 145 },
  { trigger: 'timing', count: 98 },
  { trigger: 'location', count: 67 },
  { trigger: 'delivery', count: 45 },
  { trigger: 'menu', count: 32 },
];

export default function Analytics() {
  const totalMessages = weeklyData.reduce((sum, d) => sum + d.messages, 0);
  const totalAutoReplied = weeklyData.reduce((sum, d) => sum + d.autoReplied, 0);
  const autoReplyRate = Math.round((totalAutoReplied / totalMessages) * 100);
  
  const maxMessages = Math.max(...weeklyData.map(d => d.messages));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/dashboard" className="text-gray-500 hover:text-gray-700">
              ← Back
            </a>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              <span className="font-bold text-xl">Analytics</span>
            </div>
          </div>
          <select className="border rounded-lg px-3 py-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This month</option>
          </select>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-gray-500 text-sm">Total Messages</div>
            <div className="text-3xl font-bold text-gray-900">{totalMessages}</div>
            <div className="text-green-600 text-sm">↑ 12% vs last week</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-gray-500 text-sm">Auto-Replied</div>
            <div className="text-3xl font-bold text-green-600">{totalAutoReplied}</div>
            <div className="text-green-600 text-sm">↑ 8% vs last week</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-gray-500 text-sm">Auto-Reply Rate</div>
            <div className="text-3xl font-bold text-blue-600">{autoReplyRate}%</div>
            <div className="text-gray-500 text-sm">Target: 90%</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-gray-500 text-sm">Time Saved</div>
            <div className="text-3xl font-bold text-purple-600">~6h</div>
            <div className="text-gray-500 text-sm">This week</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Weekly Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="font-bold text-lg mb-6">Messages This Week</h2>
            <div className="flex items-end justify-between h-48 gap-2">
              {weeklyData.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center gap-1">
                    <div 
                      className="w-full bg-green-500 rounded-t"
                      style={{ height: `${(d.autoReplied / maxMessages) * 150}px` }}
                    />
                    <div 
                      className="w-full bg-gray-200 rounded-t"
                      style={{ height: `${((d.messages - d.autoReplied) / maxMessages) * 150}px` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{d.day}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded" />
                <span className="text-sm text-gray-600">Auto-replied</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-200 rounded" />
                <span className="text-sm text-gray-600">Missed</span>
              </div>
            </div>
          </div>

          {/* Top Triggers */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="font-bold text-lg mb-6">Top Triggers</h2>
            <div className="space-y-4">
              {topTriggers.map((t, i) => (
                <div key={t.trigger} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">&quot;{t.trigger}&quot;</span>
                      <span className="text-gray-500">{t.count}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${(t.count / topTriggers[0].count) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="font-bold text-lg mb-4">💡 Insights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-medium text-green-800">Peak Hours</div>
              <div className="text-sm text-green-600 mt-1">
                Most messages come between 6-9 PM. Consider being available then.
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="font-medium text-blue-800">Missing Trigger</div>
              <div className="text-sm text-blue-600 mt-1">
                15 messages about &quot;discount&quot; weren&apos;t auto-replied. Add this trigger?
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="font-medium text-purple-800">Weekend Trend</div>
              <div className="text-sm text-purple-600 mt-1">
                Saturday is your busiest day. 88 messages received!
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
