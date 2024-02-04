import React from 'react';
import Root from './Root';
import Sidebar from './components/Sidebar';
import { sidebarLinks } from './utils/sidebarLinks';
import './assets/styles/base/_main.scss';

function App() {
  console.log('re-render');

  return (
    <>
      <Sidebar links={sidebarLinks} />

      <div className='rootSection'>
        <Root />
      </div>
    </>
  );
}

export default App;
