import { Response } from 'express';
import { NAV_LINKS } from '../utils/consts';

/**
 * Renders about page
 * @param {Response} res
 */

const addUsersPage = (res: Response) => {
    const addUserNavLinks = { ...NAV_LINKS, addUser: { ...NAV_LINKS.addUser, isActive: true } };

    return res.render('add-user', {
        metaTitle: 'Add user',
        navLinks: Object.values(addUserNavLinks),
        stylesheets: []
    });
};

export default addUsersPage;
