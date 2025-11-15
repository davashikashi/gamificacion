import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Missions from './pages/Missions';
import Challenges from './pages/Challenges';
import Ranking from './pages/Ranking';
import Teams from './pages/Teams';
import Profile from './pages/Profile';
import Rules from './pages/Rules';
import Notifications from './pages/Notifications';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'missions':
        return <Missions />;
      case 'challenges':
        return <Challenges />;
      case 'ranking':
        return <Ranking />;
      case 'teams':
        return <Teams />;
      case 'profile':
        return <Profile />;
      case 'rules':
        return <Rules />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onNotificationsClick={() => setShowNotifications(!showNotifications)}
      />
      {showNotifications && (
        <Notifications onClose={() => setShowNotifications(false)} />
      )}
      <main className="pt-20">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
