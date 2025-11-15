import { Zap, Trophy, Clock, Star } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: 'Maestro de Matemáticas',
      description: 'Resuelve 20 problemas de cálculo sin errores',
      difficulty: 'avanzado',
      xp: 500,
      timeLimit: '48 horas',
      participants: 45,
      type: 'individual',
    },
    {
      id: 2,
      title: 'Velocidad Mental',
      description: 'Completa 10 ejercicios rápidos en menos de 5 minutos',
      difficulty: 'intermedio',
      xp: 300,
      timeLimit: '24 horas',
      participants: 89,
      type: 'individual',
    },
    {
      id: 3,
      title: 'Colaboración Suprema',
      description: 'Completa 3 proyectos grupales esta semana',
      difficulty: 'basico',
      xp: 400,
      timeLimit: '1 semana',
      participants: 120,
      type: 'equipo',
    },
  ];

  const difficultyConfig = {
    basico: {
      bg: 'from-green-600/20 to-emerald-600/20',
      border: 'border-green-500/30',
      badge: 'bg-green-500/20 text-green-400',
      glow: 'shadow-green-500/20',
    },
    intermedio: {
      bg: 'from-yellow-600/20 to-orange-600/20',
      border: 'border-yellow-500/30',
      badge: 'bg-yellow-500/20 text-yellow-400',
      glow: 'shadow-yellow-500/20',
    },
    avanzado: {
      bg: 'from-red-600/20 to-pink-600/20',
      border: 'border-red-500/30',
      badge: 'bg-red-500/20 text-red-400',
      glow: 'shadow-red-500/20',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Desafíos Semanales</h1>
        <p className="text-gray-400">Supera los retos más difíciles y demuestra tu dominio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Star className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-white font-bold">Básico</h3>
          </div>
          <p className="text-gray-300 text-sm">Ideal para principiantes</p>
          <p className="text-green-400 text-2xl font-bold mt-2">100-200 XP</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-white font-bold">Intermedio</h3>
          </div>
          <p className="text-gray-300 text-sm">Requiere experiencia</p>
          <p className="text-yellow-400 text-2xl font-bold mt-2">300-400 XP</p>
        </div>

        <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Trophy className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-white font-bold">Avanzado</h3>
          </div>
          <p className="text-gray-300 text-sm">Solo para expertos</p>
          <p className="text-red-400 text-2xl font-bold mt-2">500+ XP</p>
        </div>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge) => {
          const config = difficultyConfig[challenge.difficulty as keyof typeof difficultyConfig];
          return (
            <div
              key={challenge.id}
              className={`bg-gradient-to-br ${config.bg} backdrop-blur-sm rounded-2xl p-6 border ${config.border} hover:shadow-xl ${config.glow} transition-all duration-200 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.badge}`}>
                      {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                    </span>
                    {challenge.type === 'equipo' && (
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold">
                        Equipo
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-lg">{challenge.description}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="flex items-center space-x-1 mb-1">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-2xl font-bold text-white">+{challenge.xp}</span>
                  </div>
                  <p className="text-gray-400 text-sm">XP</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{challenge.timeLimit}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{challenge.participants} participantes</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30">
                  Aceptar Desafío
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
        <h3 className="text-xl font-bold text-white mb-4">Reglas de los Desafíos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="text-white font-semibold">Tiempo Limitado</p>
              <p className="text-gray-400 text-sm">Cada desafío tiene un límite de tiempo específico</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="text-white font-semibold">Sin Errores</p>
              <p className="text-gray-400 text-sm">Algunos desafíos requieren precisión total</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="text-white font-semibold">Bonos Extra</p>
              <p className="text-gray-400 text-sm">Completar antes del tiempo da XP adicional</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
              4
            </div>
            <div>
              <p className="text-white font-semibold">Intentos Ilimitados</p>
              <p className="text-gray-400 text-sm">Puedes reintentar hasta completar el desafío</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
