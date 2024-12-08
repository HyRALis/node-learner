import * as http from 'http';

const handleCreateUserPostRequest = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const body: any[] = [];
    let username = '';

    req.on('data', (data) => {
        body.push(data);
    });

    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        username = parsedBody.split('=')[1].split('+').join(' ');

        console.log(username);

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
};

export default handleCreateUserPostRequest;
