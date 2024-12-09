import * as http from 'http';

import express from 'express';

import defaultPage from './pages/default';
import aboutPage from './pages/about';

const PORT = 3000;

const expressApp = express();

expressApp.use('/about', (req, res, next) => {
    aboutPage(res);
});

expressApp.use('/', (req, res, next) => {
    defaultPage(req, res);
});

expressApp.use((req, res, next) => {
    console.log('Processing request...');
});

expressApp.listen(3000);
