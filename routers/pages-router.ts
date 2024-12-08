import * as http from 'http';

import aboutPage from '../pages/about';
import defaultPage from '../pages/default';
import exp from 'constants';

const pagesRouter = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    switch (req.url) {
        case '/about':
            aboutPage(res);
            break;
        default:
            defaultPage(req, res);
            break;
    }
};

export default pagesRouter;
