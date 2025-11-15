import { X, Trophy, Zap, Users, Star, CheckCircle2 } from 'lucide-react';

interface NotificationsProps {
  onClose: () => void;
}

export default function Notifications({ onClose }: NotificationsProps) {
  const notifications = [
    {
      id: 1,
      type: 'achievement',
      icon: Trophy,
      title: 'Nueva Insignia Desbloqueada',
      message: 'Has ganado la insignia "Racha de 7 días"',
      time: 'Hace 5 minutos',
      color: 'yellow',
      unread: true,
    },
    {
      id: 2,
      type: 'xp',
      icon: Zap,
      title: '+150 XP Ganados',
      message: 'Completaste "Álgebra Lineal: Matrices"',
      time: 'Hace 1 hora',
      color: 'blue',
      unread: true,
    },
    {
      id: 3,
      type: 'team',
      icon: Users,
      title: 'Proyecto de Equipo',
      message: 'Tu equipo completó el 50% de "Física Aplicada"',
      time: 'Hace 2 horas',
      color: 'cyan',
      unread: true,
    },
    {
      id: 4,
      type: 'level',
      icon: Star,
      title: 'Nivel Subido',
      message: 'Alcanzaste el Nivel 12',
      time: 'Hace 5 horas',
      color: 'purple',
      unread: false,
    },
    {
      id: 5,
      type: 'mission',
      icon: CheckCircle2,
      title: 'Misión Disponible',
      message: 'Nueva tarea de Historia Mundial disponible',
      time: 'Hace 1 día',
      color: 'green',
      unread: false,
    },
  ];

  const colorMap = {
    yellow: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30',
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  };

  const iconColorMap = {
    yellow: 'text-yellow-400',
    blue: 'text-blue-400',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-500/30 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">Notificaciones</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="max-h-[600px] overflow-y-auto">
            <div className="p-4 space-y-3">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`relative bg-gradient-to-br ${
                      colorMap[notification.color as keyof typeof colorMap]
                    } border rounded-xl p-4 transition-all hover:shadow-lg cursor-pointer ${
                      notification.unread ? 'border-opacity-100' : 'border-opacity-30'
                    }`}
                  >
                    {notification.unread && (
                      <div className="absolute top-3 right-3 w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          colorMap[notification.color as keyof typeof colorMap]
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            iconColorMap[notification.color as keyof typeof iconColorMap]
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">
                          {notification.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">
                          {notification.message}
                        </p>
                        <p className="text-gray-500 text-xs">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t border-slate-700">
            <button className="w-full py-2 text-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              Marcar todas como leídas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
