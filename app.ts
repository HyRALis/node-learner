import path from 'path';
import express from 'express';

import bodyParser from 'body-parser';

import adminRouter from './routes/admin';
import shopRouter from './routes/shop';
import pageNotFoundPage from './utils/pages/404';
import roodDirPath from './utils/rootDirPath';

import { PORT } from './utils/config';
import { get404Page } from './controllers/error';

const expressApp = express();

expressApp.set('view engine', 'ejs');
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(express.static(path.join(roodDirPath(), 'public')));

expressApp.use('/admin', adminRouter);

expressApp.use(shopRouter);

expressApp.use(get404Page);

expressApp.listen(PORT);
