import path from 'path';
import express from 'express';

import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';

import adminRouter from './routes/admin';
import shopRouter from './routes/shop';
import pageNotFoundPage from './pages/404';
import roodDirPath from './utils/rootDirPath';

import { PORT } from './utils/config';

const expressApp = express();

expressApp.engine('handlebars', engine({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout' }));
expressApp.set('view engine', 'handlebars');
expressApp.set('views', 'views');

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(express.static(path.join(roodDirPath(), 'public')));

expressApp.use('/admin', adminRouter);

expressApp.use(shopRouter);

expressApp.use((_req, res) => {
    pageNotFoundPage(res);
});

expressApp.listen(PORT);
