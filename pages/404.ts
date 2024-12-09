import path from 'path';

import { Response } from 'express';
import roodDirPath from '../utils/rootDirPath';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const pageNotFoundPage = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.status(404).sendFile(path.join(roodDirPath(), 'views', '404.html'));
};

export default pageNotFoundPage;
