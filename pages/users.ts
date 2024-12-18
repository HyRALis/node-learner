import { Response } from 'express';

import { users } from '../routes/index';
import { NAV_LINKS } from '../utils/consts';

/**
 * Renders about page
 * @param {Response} res
 */

const usersPage = (res: Response) => {
    const userNavLinks = {
        ...NAV_LINKS,
        users: { ...NAV_LINKS.users, isActive: true }
    };

    res.setHeader('Content-Type', 'text/html');
    return res.render('users', {
        metaTitle: 'Users',
        users: users.filter((user) => user !== ''),
        navLinks: Object.values(userNavLinks),
        stylesheets: ['/css/users.css']
    });
};

export default usersPage;
