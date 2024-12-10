import { INavLink } from '../types/main-types';

export const PORT: number = 3000;

export const NAV_LINKS: { [key: string]: INavLink } = {
    home: { title: 'Home', path: '/', isActive: false },
    about: { title: 'About', path: '/about', isActive: false },
    shop: { title: 'Shop', path: '/shop', isActive: false },
    addProduct: { title: 'Add Product', path: '/admin/add-product', isActive: false }
};
