import { getAllUsers } from '../../services/usersService';
import { UseSidebarProps } from './types';
import { SelectOption } from '../shared/Select/types';
import { useState } from 'react';

const useSidebar = ({ collapseSidebar, isOpen }: UseSidebarProps) => {
  const handleCollapse = () => collapseSidebar(!isOpen);

  return { handleCollapse }
}

export default useSidebar;
