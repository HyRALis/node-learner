import express from 'express';

import bodyParser from 'body-parser';

import adminRouter from './routes/admin';
import shopRouter from './routes/shop';

const PORT = 3000;

const expressApp = express();

expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.use('/admin', adminRouter);

expressApp.use(shopRouter);

expressApp.use((_req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

expressApp.listen(PORT);
