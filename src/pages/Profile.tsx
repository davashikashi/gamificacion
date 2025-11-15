import { Trophy, Star, Zap, Target, Award, TrendingUp, Calendar } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

export default function Profile() {
  const user = {
    name: 'Estudiante Ejemplo',
    level: 12,
    rank: 'Retador',
    currentXP: 2450,
    nextLevelXP: 3000,
    totalXP: 15420,
    joinDate: 'Enero 2025',
    streak: 7,
    completedMissions: 34,
    achievements: 12,
    position: 8,
  };

  const ranks = [
    { name: 'Explorador', minLevel: 1, color: 'from-gray-500 to-gray-600' },
    { name: 'Aprendiz Activo', minLevel: 5, color: 'from-green-500 to-emerald-600' },
    { name: 'Retador', minLevel: 10, color: 'from-blue-500 to-cyan-600' },
    { name: 'Maestro del Conocimiento', minLevel: 20, color: 'from-purple-500 to-pink-600' },
  ];

  const badges = [
    { id: 1, name: 'Primera Misión', icon: 'star', earned: true, date: 'Ene 15, 2025' },
    { id: 2, name: 'Racha de 7 días', icon: 'fire', earned: true, date: 'Nov 10, 2025' },
    { id: 3, name: '10 Misiones', icon: 'target', earned: true, date: 'Nov 12, 2025' },
    { id: 4, name: 'Colaborador', icon: 'users', earned: true, date: 'Nov 8, 2025' },
    { id: 5, name: '50 Misiones', icon: 'trophy', earned: false, date: null },
    { id: 6, name: 'Racha de 30 días', icon: 'zap', earned: false, date: null },
  ];

  const stats = [
    { label: 'Tareas Completadas', value: '28', icon: Target, color: 'blue' },
    { label: 'Retos Superados', value: '6', icon: Zap, color: 'orange' },
    { label: 'Proyectos Grupales', value: '4', icon: Award, color: 'green' },
    { label: 'Racha Actual', value: '7 días', icon: TrendingUp, color: 'purple' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Mi Perfil</h1>
        <p className="text-gray-400">Revisa tu progreso y logros</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
                <p className="text-blue-400 font-semibold text-lg">{user.rank}</p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Miembro desde {user.joinDate}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Posición Global</p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                #{user.position}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Nivel {user.level} - Progreso al Nivel {user.level + 1}</span>
              <span className="text-white font-semibold">
                {user.currentXP} / {user.nextLevelXP} XP
              </span>
            </div>
            <ProgressBar
              progress={(user.currentXP / user.nextLevelXP) * 100}
              color="blue"
              showGlow={true}
              height="lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colorMap = {
                blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
                orange: 'from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400',
                green: 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400',
                purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
              };
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorMap[stat.color as keyof typeof colorMap]} border rounded-xl p-4`}
                >
                  <Icon className={`w-5 h-5 mb-2 ${colorMap[stat.color as keyof typeof colorMap].split(' ')[2]}`} />
                  <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                  <p className="text-white text-xl font-bold">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
          <div className="flex items-center space-x-2 mb-4">
            <Trophy className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Sistema de Rangos</h3>
          </div>
          <div className="space-y-3">
            {ranks.map((rank, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all ${
                  user.rank === rank.name
                    ? 'bg-gradient-to-r ' + rank.color + '/20 border-' + rank.color.split('-')[1] + '-500/50'
                    : 'bg-slate-700/30 border-slate-600/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`font-bold ${user.rank === rank.name ? 'text-white' : 'text-gray-400'}`}>
                      {rank.name}
                    </p>
                    <p className="text-gray-500 text-xs">Nivel {rank.minLevel}+</p>
                  </div>
                  {user.rank === rank.name && (
                    <Star className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
        <div className="flex items-center space-x-2 mb-6">
          <Award className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold text-white">Insignias y Logros</h2>
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
            {badges.filter(b => b.earned).length} / {badges.length}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-xl border text-center transition-all ${
                badge.earned
                  ? 'bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-yellow-500/50 hover:scale-105'
                  : 'bg-slate-700/30 border-slate-600/30 opacity-50'
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                  badge.earned
                    ? 'bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg shadow-yellow-500/30'
                    : 'bg-slate-600'
                }`}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className={`text-sm font-semibold mb-1 ${badge.earned ? 'text-white' : 'text-gray-500'}`}>
                {badge.name}
              </p>
              {badge.earned && badge.date && (
                <p className="text-xs text-gray-400">{badge.date}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
