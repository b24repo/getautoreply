'use client';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: 'green' | 'blue' | 'purple' | 'orange';
  icon?: string;
}

const colorClasses = {
  green: 'text-green-600',
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
};

export default function StatsCard({ 
  title, 
  value, 
  subtitle, 
  color = 'green',
  icon 
}: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-500 text-sm">{title}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <div className={`text-3xl font-bold ${colorClasses[color]}`}>
        {value}
      </div>
      {subtitle && (
        <div className="text-gray-500 text-sm mt-1">{subtitle}</div>
      )}
    </div>
  );
}
