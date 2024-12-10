import path from 'path';

import { Response } from 'express';
import { NAV_LINKS } from '../utils/consts';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const aboutPage = (res: Response) => {
    const aboutNavLinks = { ...NAV_LINKS, about: { ...NAV_LINKS.about, isActive: true } };

    res.setHeader('Content-Type', 'text/html');
    return res.render('about', { metaTitle: 'About', navLinks: Object.values(aboutNavLinks) });
};

export default aboutPage;
