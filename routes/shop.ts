import express from 'express';

import aboutPage from '../pages/about';
import defaultPage from '../pages/default';
import handleNamePostRequest from '../requestHandlers/handleAboutPost';
import shopPage from '../pages/shop';

const router = express.Router();

router.get('/about', (_req, res) => {
    aboutPage(res);
});

router.post('/about', handleNamePostRequest);

router.get('/shop', (_req, res) => {
    shopPage(res);
});

router.get('/', (req, res) => {
    defaultPage(req, res);
});

export default router;
