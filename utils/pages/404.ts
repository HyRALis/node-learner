import { Response } from 'express';
import { NAV_LINKS } from '../utils/consts';

/**
 * Renders about page
 * @param {Response} res
 */

const pageNotFoundPage = (res: Response) => {
    const pnpNavLinks = NAV_LINKS;

    res.setHeader('Content-Type', 'text/html');
    return res.render('404', { metaTitle: 'Page not found', navLinks: Object.values(pnpNavLinks) });
};

export default pageNotFoundPage;
