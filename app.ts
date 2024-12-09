import express from 'express';

import bodyParser from 'body-parser';

import adminRouter from './routes/admin';
import shopRouter from './routes/shop';
import pageNotFoundPage from './pages/404';
import path from 'path';
import roodDirPath from './utils/rootDirPath';

const PORT = 3000;

const expressApp = express();

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(express.static(path.join(roodDirPath(), 'public')));

expressApp.use('/admin', adminRouter);

expressApp.use(shopRouter);

expressApp.use((_req, res) => {
    pageNotFoundPage(res);
});

expressApp.listen(PORT);
