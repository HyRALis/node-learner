import path from 'path';
import express from 'express';

import bodyParser from 'body-parser';

import mainRouter from './routes';
import pageNotFoundPage from './pages/404';
import roodDirPath from './utils/rootDirPath';

import { PORT } from './utils/config';

const expressApp = express();

expressApp.set('view engine', 'ejs');
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(express.static(path.join(roodDirPath(), 'public')));

expressApp.use(mainRouter);

expressApp.use((_req, res) => {
    pageNotFoundPage(res);
});

expressApp.listen(PORT);
