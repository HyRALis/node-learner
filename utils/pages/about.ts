import { Response } from 'express';
import { NAV_LINKS } from '../consts';

/**
 * Renders about page
 * @param {Response} res
 */

const aboutPage = (res: Response) => {
    const aboutNavLinks = { ...NAV_LINKS, about: { ...NAV_LINKS.about, isActive: true } };

    res.setHeader('Content-Type', 'text/html');
    return res.render('about', { metaTitle: 'About', navLinks: Object.values(aboutNavLinks), stylesheets: [] });
};

export default aboutPage;
