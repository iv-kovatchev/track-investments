import React, { useState } from 'react';
import Root from './Root';
import Sidebar from './components/Sidebar';
import { sidebarLinks } from './utils/sidebarLinks';
import './assets/styles/base/_main.scss';
import { UserProvider } from './utils/contexts/UserContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <UserProvider>
        <Sidebar
          isOpen={isSidebarOpen}
          links={sidebarLinks}
          collapseSidebar={setIsSidebarOpen} />
        <div className={`rootSection ${isSidebarOpen ? 'rootSection--sidebar-open' : ''}`}>
          <Root />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
