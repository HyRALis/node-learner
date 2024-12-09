import path from 'path';

import { Response } from 'express';
import roodDirPath from '../utils/rootDirPath';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const aboutPage = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.sendFile(path.join(roodDirPath(), 'views', 'about.html'));
};

export default aboutPage;
