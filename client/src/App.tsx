import React, { useState } from 'react';
import Root from './Root';
import Sidebar from './components/Sidebar';
import { sidebarLinks } from './utils/sidebarLinks';
import './assets/styles/base/_main.scss';
import { getAllUsers } from './services/usersService';
import { UsersContext } from './utils/contexts/UsersContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { data, isLoading, isError, error  } = getAllUsers();

  console.log(error);

  return (
    <>
      {/*<UsersContext.Provider value={{ users: data, isLoading, isError }}>*/}
        <Sidebar
          isOpen={isSidebarOpen}
          links={sidebarLinks}
          collapseSidebar={setIsSidebarOpen} />
        <div className={`rootSection ${isSidebarOpen ? 'rootSection--sidebar-open' : ''}`}>
          <Root />
        </div>
      {/*</UsersContext.Provider>*/}
    </>
  );
}

export default App;
