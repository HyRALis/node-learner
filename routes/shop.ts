import express from 'express';

import aboutPage from '../pages/about';
import defaultPage from '../pages/default';
import handleNamePostRequest from '../requestHandlers/handleAboutPost';

const router = express.Router();

router.get('/about', (_req, res) => {
    aboutPage(res);
});

router.post('/about', handleNamePostRequest);

router.get('/', (req, res) => {
    defaultPage(req, res);
});

export default router;
