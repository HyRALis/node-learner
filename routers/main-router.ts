import * as http from 'http';

import homePage from '../pages/home';
import defaultPage from '../pages/default';
import usersPage from '../pages/users';
import handleCreateUserPostRequest from '../requestHandlers/handleCreateUserPost';

const mainRouter = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    switch (req.url) {
        case '/':
            return homePage(res);
        case '/users':
            return usersPage(req, res);
        case '/create-user': {
            if (req.method === 'POST') {
                return handleCreateUserPostRequest(req, res);
            }
            return defaultPage(req, res);
        }
        default:
            return defaultPage(req, res);
    }
};

export default mainRouter;
