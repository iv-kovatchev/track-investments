import { Link } from '../components/Sidebar/types';
import { FaHandHoldingDollar, FaGear } from 'react-icons/fa6';

export const sidebarLinks: Link[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <FaHandHoldingDollar />
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <FaGear />
  }
];
