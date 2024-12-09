import path from 'path';

import { Response } from 'express';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const shopPage = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};

export default shopPage;
