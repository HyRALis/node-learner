import * as http from 'http';
import createFile from '../utils/createFile';

const handleNamePostRequest = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const body: any[] = [];
    let name = '';

    req.on('data', (data) => {
        body.push(data);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        name = parsedBody.split('=')[1];
        createFile(name + '.txt', 'My name is ' + name, () => {
            res.statusCode = 302;
            res.setHeader('Location', '/about');
            res.end();
        });
    });
};

export default handleNamePostRequest;
