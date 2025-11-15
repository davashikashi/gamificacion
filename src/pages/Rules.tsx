import { BookOpen, Zap, Trophy, Users, Star, Target } from 'lucide-react';

export default function Rules() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Reglas del Juego</h1>
        <p className="text-gray-400">Aprende cómo funciona la plataforma y cómo ganar XP</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Sistema de Niveles y XP</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              El sistema de experiencia (XP) es la base de tu progreso. Cada actividad completada te otorga XP que te permite subir de nivel y desbloquear nuevos rangos.
            </p>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Cómo Ganar XP:</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Tareas Básicas:</strong> 100-150 XP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Tareas Intermedias:</strong> 200-300 XP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Tareas Avanzadas:</strong> 400-500 XP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Desafíos Semanales:</strong> Bono de 500 XP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Misiones Grupales:</strong> 250-400 XP por miembro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Rangos y Progresión</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 border border-gray-500/30 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2">Explorador (Nivel 1-4)</h3>
              <p className="text-gray-300 text-sm">Tu viaje comienza aquí. Aprende lo básico y familiarízate con la plataforma.</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2">Aprendiz Activo (Nivel 5-9)</h3>
              <p className="text-gray-300 text-sm">Participas regularmente y completas misiones con consistencia.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2">Retador (Nivel 10-19)</h3>
              <p className="text-gray-300 text-sm">Dominas desafíos difíciles y colaboras efectivamente en equipos.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2">Maestro del Conocimiento (Nivel 20+)</h3>
              <p className="text-gray-300 text-sm">Líder académico que inspira y ayuda a otros estudiantes.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Tipos de Misiones</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                Tareas Individuales
              </h3>
              <p className="text-gray-300 text-sm">
                Actividades académicas personales con diferentes niveles de dificultad. Completa antes de la fecha límite para obtener el XP completo.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                Retos y Desafíos
              </h3>
              <p className="text-gray-300 text-sm">
                Actividades cronometradas que requieren velocidad y precisión. Completa antes del tiempo límite para bonos extra.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                Proyectos Colaborativos
              </h3>
              <p className="text-gray-300 text-sm">
                Misiones grupales donde el progreso es compartido. Todos los miembros del equipo reciben XP al completar.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Insignias y Logros</h2>
          </div>
          <div className="text-gray-300 space-y-3">
            <p>
              Las insignias son reconocimientos especiales por alcanzar hitos importantes. Algunas se obtienen automáticamente, otras requieren esfuerzo constante.
            </p>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-3">Ejemplos de Insignias:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🔥</span>
                  <div>
                    <p className="text-white font-medium">Racha de 7 días</p>
                    <p className="text-sm text-gray-400">Completa actividades durante 7 días consecutivos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🏆</span>
                  <div>
                    <p className="text-white font-medium">Top 10</p>
                    <p className="text-sm text-gray-400">Alcanza el top 10 del ranking semanal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">⭐</span>
                  <div>
                    <p className="text-white font-medium">50 Misiones</p>
                    <p className="text-sm text-gray-400">Completa 50 misiones en total</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🤝</span>
                  <div>
                    <p className="text-white font-medium">Colaborador Activo</p>
                    <p className="text-sm text-gray-400">Participa en 10 proyectos grupales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-cyan-500/20 rounded-lg">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Sistema de Equipos</h2>
          </div>
          <div className="text-gray-300 space-y-3">
            <p>
              Los equipos permiten colaborar con otros estudiantes y ganar XP juntos. El XP del equipo es la suma del XP de todos sus miembros.
            </p>
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Beneficios de Trabajar en Equipo:</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>XP compartido en misiones grupales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Bonos adicionales por colaboración efectiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Acceso a proyectos exclusivos de equipo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Competencia en el ranking de equipos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
