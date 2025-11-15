import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

export default function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
  const colorMap = {
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    orange: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
  };

  const iconColorMap = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
    purple: 'text-purple-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-xl p-4 transition-transform hover:scale-105`}>
      <Icon className={`w-5 h-5 ${iconColorMap[color]} mb-2`} />
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className="text-white text-xl font-bold">{value}</p>
    </div>
  );
}
