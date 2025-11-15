import { Users, UserPlus, Trophy, Target } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

export default function Teams() {
  const currentTeam = {
    name: 'Los Innovadores',
    members: [
      { id: 1, name: 'Tú', level: 12, xp: 15420, avatar: 'TU', isCurrentUser: true },
      { id: 2, name: 'Ana García', level: 15, xp: 18500, avatar: 'AG' },
      { id: 3, name: 'Carlos Ruiz', level: 14, xp: 17200, avatar: 'CR' },
      { id: 4, name: 'María López', level: 14, xp: 16800, avatar: 'ML' },
    ],
    totalXP: 67920,
    position: 3,
    activeMissions: 5,
  };

  const groupMissions = [
    {
      id: 1,
      title: 'Proyecto de Física Aplicada',
      description: 'Crear presentación colaborativa sobre energía renovable',
      progress: 65,
      xpPerMember: 250,
      deadline: '3 días',
      contributedMembers: 3,
      totalMembers: 4,
    },
    {
      id: 2,
      title: 'Investigación Histórica',
      description: 'Documento compartido sobre la Revolución Industrial',
      progress: 40,
      xpPerMember: 200,
      deadline: '5 días',
      contributedMembers: 2,
      totalMembers: 4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Equipos</h1>
        <p className="text-gray-400">Colabora con tus compañeros y alcancen metas juntos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{currentTeam.name}</h2>
                <p className="text-gray-400">Posición #{currentTeam.position} en el ranking</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <UserPlus className="w-4 h-4" />
              <span>Invitar</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-700/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">XP Total</p>
              <p className="text-2xl font-bold text-white">{currentTeam.totalXP.toLocaleString()}</p>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Miembros</p>
              <p className="text-2xl font-bold text-white">{currentTeam.members.length}</p>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Misiones Activas</p>
              <p className="text-2xl font-bold text-white">{currentTeam.activeMissions}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Miembros del Equipo</h3>
            <div className="space-y-3">
              {currentTeam.members.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-colors ${
                    member.isCurrentUser
                      ? 'bg-cyan-500/20 border border-cyan-500/50'
                      : 'bg-slate-700/30'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="text-white font-semibold">{member.name}</p>
                      {member.isCurrentUser && (
                        <span className="px-2 py-0.5 bg-cyan-500 text-white text-xs rounded-full">
                          Tú
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">Nivel {member.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{member.xp.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">XP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
          <div className="flex items-center space-x-2 mb-4">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Beneficios de Equipo</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-blue-400 font-semibold mb-1">XP Compartido</p>
              <p className="text-gray-300 text-sm">Todos ganan cuando el equipo completa misiones</p>
            </div>
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-400 font-semibold mb-1">Bonos Colaborativos</p>
              <p className="text-gray-300 text-sm">XP extra por trabajar juntos</p>
            </div>
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <p className="text-purple-400 font-semibold mb-1">Ranking de Equipos</p>
              <p className="text-gray-300 text-sm">Compite contra otros equipos</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-6 h-6 text-green-400" />
          <h2 className="text-2xl font-bold text-white">Misiones Grupales Activas</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {groupMissions.map((mission) => (
            <div
              key={mission.id}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-white mb-2">{mission.title}</h3>
              <p className="text-gray-400 mb-4">{mission.description}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progreso del Equipo</span>
                  <span className="text-white font-semibold">{mission.progress}%</span>
                </div>
                <ProgressBar progress={mission.progress} color="green" height="md" />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm">
                    {mission.contributedMembers}/{mission.totalMembers} miembros contribuyendo
                  </p>
                  <p className="text-gray-400 text-sm">Tiempo restante: {mission.deadline}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">+{mission.xpPerMember}</p>
                  <p className="text-gray-400 text-xs">XP por miembro</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Cómo Funcionan los Equipos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="text-white font-semibold">Forma tu Equipo</p>
              <p className="text-gray-300 text-sm">Invita hasta 6 compañeros para colaborar</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="text-white font-semibold">Misiones Compartidas</p>
              <p className="text-gray-300 text-sm">Completen proyectos juntos para ganar XP</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="text-white font-semibold">Progreso Colectivo</p>
              <p className="text-gray-300 text-sm">Cada contribución suma al objetivo común</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              4
            </div>
            <div>
              <p className="text-white font-semibold">Recompensas Grupales</p>
              <p className="text-gray-300 text-sm">Todos ganan XP al completar misiones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
