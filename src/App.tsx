import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardWidgets from './components/DashboardWidgets';
import PanoramaViewer from './components/PanoramaViewer';

function App() {
  const [activeView, setActiveView] = useState('panorama');
  const [isBoundaryOpen, setIsBoundaryOpen] = useState(false);

  const handleNavigate = (view: string) => {
    setActiveView(view);
    if (view !== 'purok' && view !== 'barangay' && view !== 'municipal') {
      setIsBoundaryOpen(false);
    }
  };

  const handleToggleBoundary = () => {
    setIsBoundaryOpen(!isBoundaryOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500">
      <Sidebar
        activeView={activeView}
        onNavigate={handleNavigate}
        isBoundaryOpen={isBoundaryOpen}
        onToggleBoundary={handleToggleBoundary}
      />

      <div className="ml-64 min-h-screen flex flex-col">
        <TopBar />

        <main className="flex-1 p-8">
          <div className="h-full min-h-[calc(100vh-8rem)]">
            {activeView === 'panorama' ? (
              <PanoramaViewer />
            ) : (
              <DashboardWidgets />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
