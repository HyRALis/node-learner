import * as http from 'http';

const handleNamePostRequest = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const body: any[] = [];
    let name = '';

    req.on('data', (data) => {
        body.push(data);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        name = parsedBody.split('=')[1];

        console.log(name);
    });
};

export default handleNamePostRequest;
