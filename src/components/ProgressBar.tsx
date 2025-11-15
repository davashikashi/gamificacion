interface ProgressBarProps {
  progress: number;
  color?: 'blue' | 'green' | 'purple' | 'orange';
  showGlow?: boolean;
  height?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({
  progress,
  color = 'blue',
  showGlow = false,
  height = 'md'
}: ProgressBarProps) {
  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500',
  };

  const heightMap = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  return (
    <div className={`w-full bg-slate-700/50 rounded-full overflow-hidden ${heightMap[height]}`}>
      <div
        className={`h-full bg-gradient-to-r ${colorMap[color]} transition-all duration-500 ease-out ${
          showGlow ? 'shadow-lg shadow-blue-500/50' : ''
        }`}
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
}
