export interface Link {
  name: string;
  path: string;
  icon?: JSX.Element;
}

export interface SidebarProps {
  links: Link[];
  isOpen: boolean;
  collapseSidebar: (isOpen: boolean) => void;
}

export interface SidebarLinkProps {
  link: Link;
  isSidebarOpen: boolean;
}

export interface UseSidebarProps extends Pick<SidebarProps, 'isOpen' | 'collapseSidebar'> {}