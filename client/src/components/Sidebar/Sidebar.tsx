import logo from '../../assets/images/investment-logo.png';
import './Sidebar.scss';
import { SidebarProps } from './types';
import SidebarLink from './SidebarLink';
import { useState } from 'react';

const Sidebar = ({ links }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'sidebar--is-open' : ''}`}>
      <div className='sidebar__header'>
          <img src={logo} alt='logo' className='sidebar__logo' />
          <h2 className='sidebar__title'>Investments Track</h2>
      </div>

      <div>
        <ul>
          {links.map((link, index) =>
            <SidebarLink
              link={link}
              isSidebarOpen={isOpen}
              key={index}
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
