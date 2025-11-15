import { Trophy, Star, Zap, TrendingUp, Target, Award } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import StatCard from '../components/StatCard';
import MissionCard from '../components/MissionCard';
import AchievementBadge from '../components/AchievementBadge';

export default function Dashboard() {
  const userStats = {
    level: 12,
    currentXP: 2450,
    nextLevelXP: 3000,
    rank: 'Retador',
    totalPoints: 15420,
    weeklyStreak: 7,
    completedMissions: 34,
    position: 8,
  };

  const activeMissions = [
    {
      id: 1,
      title: 'Álgebra Lineal: Matrices',
      type: 'Tarea',
      xp: 150,
      progress: 75,
      deadline: '2 días',
      difficulty: 'intermedio',
    },
    {
      id: 2,
      title: 'Quiz de Historia Mundial',
      type: 'Reto',
      xp: 200,
      progress: 30,
      deadline: '5 horas',
      difficulty: 'avanzado',
    },
    {
      id: 3,
      title: 'Proyecto Colaborativo',
      type: 'Equipo',
      xp: 300,
      progress: 60,
      deadline: '1 semana',
      difficulty: 'intermedio',
    },
  ];

  const recentAchievements = [
    { id: 1, name: 'Racha de 7 días', icon: 'fire', color: 'from-orange-500 to-red-500' },
    { id: 2, name: 'Primera Posición Semanal', icon: 'trophy', color: 'from-yellow-500 to-amber-500' },
    { id: 3, name: '10 Misiones Completadas', icon: 'star', color: 'from-blue-500 to-cyan-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          ¡Bienvenido, Estudiante!
        </h1>
        <p className="text-gray-400">Continúa tu camino hacia el conocimiento</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Nivel {userStats.level}</h2>
              <p className="text-blue-400 font-semibold text-lg">{userStats.rank}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">XP Total</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {userStats.totalPoints}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Progreso al Nivel {userStats.level + 1}</span>
              <span className="text-white font-semibold">
                {userStats.currentXP} / {userStats.nextLevelXP} XP
              </span>
            </div>
            <ProgressBar
              progress={(userStats.currentXP / userStats.nextLevelXP) * 100}
              color="blue"
              showGlow={true}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <StatCard
              icon={Target}
              label="Misiones"
              value={userStats.completedMissions}
              color="blue"
            />
            <StatCard
              icon={Zap}
              label="Racha"
              value={`${userStats.weeklyStreak} días`}
              color="orange"
            />
            <StatCard
              icon={TrendingUp}
              label="Posición"
              value={`#${userStats.position}`}
              color="green"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Logros Recientes</h3>
          </div>
          <div className="space-y-3">
            {recentAchievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                name={achievement.name}
                icon={achievement.icon}
                gradient={achievement.color}
              />
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 rounded-lg transition-colors text-sm font-medium">
            Ver Todas las Insignias
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Misiones Activas</h2>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Ver Todas
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-500/20 rounded-lg">
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">Desafío Semanal Disponible</h3>
            <p className="text-gray-300 text-sm">
              Completa 15 misiones esta semana y gana 500 XP de bonificación
            </p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
