import path from 'path';

import { Response } from 'express';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const pageNotFoundPage = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
};

export default pageNotFoundPage;
