import * as http from 'http';
import handleNamePostRequest from '../requestHandlers/handleAboutPost';

const requestsRouter = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    switch (req.url) {
        case '/about': {
            if (req.method === 'POST') {
                handleNamePostRequest(req, res);
                return;
            }
            break;
        }
        default:
            break;
    }
};

export default requestsRouter;
