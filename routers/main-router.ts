import * as http from 'http';
import handleNamePostRequest from '../requestHandlers/handleAboutPost';
import aboutPage from '../pages/about';
import defaultPage from '../pages/default';

const mainRouter = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    switch (req.url) {
        case '/about': {
            if (req.method === 'POST') {
                return handleNamePostRequest(req, res);
            }
            return aboutPage(res);
        }
        default:
            return defaultPage(req, res);
    }
};

export default mainRouter;
