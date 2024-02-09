import { UseSidebarProps } from './types';

const useSidebar = ({ collapseSidebar, isOpen }: UseSidebarProps) => {
  const handleCollapse = () => collapseSidebar(!isOpen);

  return { handleCollapse }
}

export default useSidebar;
