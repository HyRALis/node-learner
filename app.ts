import * as http from 'http';
import mainRouter from './routers/main-router';

const PORT = 3000;

const server = http.createServer(mainRouter);

server.listen(PORT);
