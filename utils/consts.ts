import { INavLink } from '../types/main-types';

export const NAV_LINKS: { [key: string]: INavLink } = {
    home: { title: 'Home', path: '/', isActive: false },
    addUser: { title: 'Add user', path: '/add-user', isActive: false },
    users: { title: 'Users', path: '/users', isActive: false }
};
