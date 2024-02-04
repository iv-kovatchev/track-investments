import { SidebarLinkProps } from '../types';
import { Link } from 'react-router-dom';
import './SidebarLink.scss';

const SidebarLink = ({ link, isSidebarOpen }: SidebarLinkProps) => {
  return (
    <li className={`sidebarLink ${isSidebarOpen ? 'sidebarLink--is-open' : ''}`}>
      <Link className={`sidebarLink__link`} to={link.path}>
        <i
          className={`sidebarLink__icon`}>
          {link.icon}
        </i>
        <p className='sidebarLink__link-text'>
          {link.name}
        </p>
      </Link>
    </li>
  )
}

export default SidebarLink;
