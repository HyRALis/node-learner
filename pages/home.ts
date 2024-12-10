import path from 'path';
import { Request, Response } from 'express';
import roodDirPath from '../utils/rootDirPath';

/**
 * Generates a default HTML page as a response to any route that doesn't match
 * any other defined route. The page will have an h1 element with the
 * capitalized route as its text.
 * @param req The IncomingMessage object from the http module.
 * @param res The ServerResponse object from the http module.
 */
const homePage = (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.render('home', { metaTitle: 'Home' });
};

export default homePage;
