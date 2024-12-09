import { Response } from 'express';
import * as http from 'http';

/**
 * Generates a default HTML page as a response to any route that doesn't match
 * any other defined route. The page will have an h1 element with the
 * capitalized route as its text.
 * @param req The IncomingMessage object from the http module.
 * @param res The ServerResponse object from the http module.
 */
const defaultPage = (req: http.IncomingMessage, res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.send(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>${req.url?.split('/')[1].toUpperCase()}</title>
                </head>
                <body>
                <h1>You are on page ${req.url?.split('/')[1]}</h1>
                </body>
            </html>
            `);
};

export default defaultPage;
