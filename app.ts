import express from 'express';

import bodyParser from 'body-parser';

import defaultPage from './pages/default';
import aboutPage from './pages/about';
import createProduct from './pages/create-product';

const PORT = 3000;

const expressApp = express();

expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.use('/create-product', (_req, res) => {
    createProduct(res);
});

expressApp.post('/product', (req, res) => {
    console.log({ body: req.body.title });
    res.redirect('/create-product');
});

expressApp.use('/about', (_req, res) => {
    aboutPage(res);
});

expressApp.use('/', (req, res) => {
    defaultPage(req, res);
});

expressApp.listen(PORT);
