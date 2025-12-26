export interface NavigationItem {
  name: string;
  icon: string;
  route?: string;
  children?: NavigationItem[];
  opened?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard'
  },
  {
    name: 'Users',
    icon: 'people',
    children: [
      {
        name: 'User List',
        icon: 'list',
        route: '/users/list'
      },
      {
        name: 'Create User',
        icon: 'person_add',
        route: '/users/create'
      }
    ],
    opened: false
  },
  {
    name: 'Settings',
    icon: 'settings',
    route: '/settings'
  }
];