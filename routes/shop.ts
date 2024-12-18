import express from 'express';

import aboutPage from '../utils/pages/about';
import handleNamePostRequest from '../utils/requestHandlers/handleAboutPost';
import shopPage from '../utils/pages/shop';
import homePage from '../utils/pages/home';
import { getShopPage } from '../controllers/products';

const router = express.Router();

router.get('/about', (_req, res) => aboutPage(res));

router.post('/about', handleNamePostRequest);

router.get('/shop', getShopPage);

router.get('/', homePage);

export default router;
