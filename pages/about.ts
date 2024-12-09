import path from 'path';

import { Response } from 'express';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const aboutPage = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
};

export default aboutPage;
