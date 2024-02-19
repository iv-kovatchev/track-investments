import React, { useState } from 'react';
import Root from './Root';
import Sidebar from './components/Sidebar';
import { sidebarLinks } from './utils/sidebarLinks';
import './assets/styles/base/_main.scss';
import { InvestorProvider } from './utils/contexts/InvestorContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <InvestorProvider>
        <Sidebar
          isOpen={isSidebarOpen}
          links={sidebarLinks}
          collapseSidebar={setIsSidebarOpen} />
        <div className={`rootSection ${isSidebarOpen ? 'rootSection--sidebar-open' : ''}`}>
          <Root />
        </div>
      </InvestorProvider>
    </>
  );
}

export default App;
