import { BookOpen, CheckCircle2, Clock, Zap } from 'lucide-react';
import MissionCard from '../components/MissionCard';
import ProgressBar from '../components/ProgressBar';

export default function Missions() {
  const missions = {
    active: [
      {
        id: 1,
        title: 'Álgebra Lineal: Matrices',
        type: 'Tarea',
        xp: 150,
        progress: 75,
        deadline: '2 días',
        difficulty: 'intermedio' as const,
      },
      {
        id: 2,
        title: 'Quiz de Historia Mundial',
        type: 'Reto',
        xp: 200,
        progress: 30,
        deadline: '5 horas',
        difficulty: 'avanzado' as const,
      },
      {
        id: 3,
        title: 'Proyecto Colaborativo',
        type: 'Equipo',
        xp: 300,
        progress: 60,
        deadline: '1 semana',
        difficulty: 'intermedio' as const,
      },
      {
        id: 4,
        title: 'Introducción a Python',
        type: 'Tarea',
        xp: 100,
        progress: 20,
        deadline: '3 días',
        difficulty: 'basico' as const,
      },
    ],
    available: [
      {
        id: 5,
        title: 'Física Cuántica: Conceptos Básicos',
        type: 'Tarea',
        xp: 250,
        progress: 0,
        deadline: '1 semana',
        difficulty: 'avanzado' as const,
      },
      {
        id: 6,
        title: 'Redacción Académica',
        type: 'Reto',
        xp: 180,
        progress: 0,
        deadline: '4 días',
        difficulty: 'intermedio' as const,
      },
    ],
  };

  const weeklyGoal = {
    current: 8,
    target: 15,
    xpBonus: 500,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Misiones</h1>
        <p className="text-gray-400">Completa misiones para ganar XP y subir de nivel</p>
      </div>

      <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Meta Semanal</h3>
              <p className="text-gray-300 text-sm">Completa 15 misiones y gana {weeklyGoal.xpBonus} XP extra</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white">{weeklyGoal.current}/{weeklyGoal.target}</p>
            <p className="text-gray-400 text-sm">Misiones</p>
          </div>
        </div>
        <ProgressBar
          progress={(weeklyGoal.current / weeklyGoal.target) * 100}
          color="blue"
          showGlow={true}
          height="lg"
        />
      </div>

      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">Misiones Activas</h2>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
            {missions.active.length}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.active.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="w-6 h-6 text-green-400" />
          <h2 className="text-2xl font-bold text-white">Misiones Disponibles</h2>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
            {missions.available.length}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.available.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
        <div className="flex items-center space-x-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-400" />
          <h3 className="text-xl font-bold text-white">Cómo Ganar XP</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg mt-1">
              <Zap className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Completa Tareas</p>
              <p className="text-gray-400 text-sm">Gana entre 100-300 XP por tarea completada</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg mt-1">
              <Zap className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Supera Retos</p>
              <p className="text-gray-400 text-sm">Los retos ofrecen hasta 500 XP</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg mt-1">
              <Zap className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Trabaja en Equipo</p>
              <p className="text-gray-400 text-sm">Las misiones colaborativas dan bonos extra</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg mt-1">
              <Zap className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Mantén tu Racha</p>
              <p className="text-gray-400 text-sm">Gana bonos diarios por actividad constante</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
