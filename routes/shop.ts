import express from 'express';

import aboutPage from '../pages/about';
import handleNamePostRequest from '../requestHandlers/handleAboutPost';
import shopPage from '../pages/shop';
import homePage from '../pages/home';

const router = express.Router();

router.get('/about', (_req, res) => {
    aboutPage(res);
});

router.post('/about', handleNamePostRequest);

router.get('/shop', (_req, res) => {
    shopPage(res);
});

router.get('/', (req, res) => {
    homePage(req, res);
});

export default router;
