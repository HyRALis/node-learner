import { Request, Response } from 'express';
import { NAV_LINKS } from '../consts';

/**
 * Generates a default HTML page as a response to any route that doesn't match
 * any other defined route. The page will have an h1 element with the
 * capitalized route as its text.
 * @param req The IncomingMessage object from the http module.
 * @param res The ServerResponse object from the http module.
 */
const homePage = (_req: Request, res: Response) => {
    const homeNavLinks = { ...NAV_LINKS, home: { ...NAV_LINKS.home, isActive: true } };

    res.setHeader('Content-Type', 'text/html');
    return res.render('home', { metaTitle: 'Home', navLinks: Object.values(homeNavLinks), stylesheets: [] });
};

export default homePage;
