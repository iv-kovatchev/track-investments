import logo from '../../assets/images/investment-logo.png';
import './Sidebar.scss';
import { SidebarProps } from './types';
import SidebarLink from './SidebarLink';
import { SlArrowLeftCircle } from 'react-icons/sl';

const Sidebar = ({ links, isOpen, collapseSidebar }: SidebarProps) => {
  const handleCollapse = () => collapseSidebar(!isOpen);

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

      <div className='sidebar__collapse-icon'>
        <SlArrowLeftCircle onClick={handleCollapse} />
      </div>
    </div>
  )
}

export default Sidebar;
