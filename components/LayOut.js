import { useState } from 'react';
import Sidebar from './SideNavbar';
import RequestList from './RequestList';
import DonorList from './DonorList'; // Create this component
const Layout = () => {
  const [selectedView, setSelectedView] = useState('dashboard'); // Default view

  const handleNavigation = (view) => {
    setSelectedView(view);
  };

  const renderView = () => {
    switch (selectedView) {
    //   case 'dashboard':
    //     return <Dashboard />;
    //   case 'map':
    //     return <MapView />;
      case 'requests':
        return <RequestList />;
      case 'donors':
        return <DonorList />;
    //   case 'alerts':
    //     return <Alerts />;
    //   case 'reports':
    //     return <Reports />;
    //   case 'settings':
    //     return <Settings />;
    //   case 'help':
    //     return <Help />;
      case 'logout':
        return <div>Logging out...</div>; // Handle logout logic
      default:
        return <div>Welcome to the Disaster Donation App</div>; // Default content
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onNavigate={handleNavigation} />
      <main style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
        {renderView()}
      </main>
    </div>
  );
};

export default Layout;
