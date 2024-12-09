import express from 'express';
import usersPage from './pages/users';
import defaultPage from './pages/default';

const PORT = 3000;

const expressApp = express();

// expressApp.use((_req, _res, next) => {
//     console.log('First middleware');
//     next();
// });

// expressApp.use((_req, _res, next) => {
//     console.log('Second middleware');
//     next();
// });

// expressApp.use((_req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.send('<h1>This is the last middleware</h1>');
// });

expressApp.use('/users', (_req, res) => {
    usersPage(res);
});

expressApp.use('/', (req, res, next) => {
    defaultPage(req, res);
});

expressApp.listen(PORT);
