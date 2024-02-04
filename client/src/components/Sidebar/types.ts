export interface Link {
  name: string;
  path: string;
  icon?: JSX.Element;

}

export interface SidebarProps {
  links: Link[];
}

export interface SidebarLinkProps {
  link: Link;
  isSidebarOpen: boolean;
}