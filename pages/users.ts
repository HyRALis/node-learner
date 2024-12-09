import { Response } from 'express';
import * as http from 'http';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const usersPage = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Users</title>
            </head>
            <body>
                <h3 style="text-transform: capitalize;">
                    You are on the users page
                </h3>
                <ul style="list-style: none;">
                    <li>John</li>
                    <li>Peter</li>
                    <li>Bob</li>
                </ul>
            </body>
        </html>
            `);
};

export default usersPage;
