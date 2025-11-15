import { Trophy, Star, Flame, Award, Zap } from 'lucide-react';

interface AchievementBadgeProps {
  name: string;
  icon: string;
  gradient: string;
}

export default function AchievementBadge({ name, icon, gradient }: AchievementBadgeProps) {
  const iconMap = {
    trophy: Trophy,
    star: Star,
    fire: Flame,
    award: Award,
    zap: Zap,
  };

  const Icon = iconMap[icon as keyof typeof iconMap] || Star;

  return (
    <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors group">
      <div className={`p-2 bg-gradient-to-br ${gradient} rounded-lg group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-gray-300 text-sm font-medium flex-1">{name}</span>
    </div>
  );
}
