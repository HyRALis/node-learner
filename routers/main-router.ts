import * as http from 'http';

import pagesRouter from './pages-router';
import requestsRouter from './request-roter';

const mainRouter = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    pagesRouter(req, res);
    requestsRouter(req, res);
};

export default mainRouter;
