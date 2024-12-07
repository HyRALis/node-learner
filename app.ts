import * as http from 'http';
import * as fs from 'fs';

const PORT = 3000;

const handleNamePostRequest = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const body: any[] = [];
    let name = '';

    req.on('data', (data) => {
        body.push(data);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        name = parsedBody.split('=')[1];
        createFile(name + '.txt', 'My name is ' + name);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/about');
    res.end();
    return;
};

const createFile = (name: string, data: string) => fs.writeFileSync(name, data);

const aboutPage = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>About</title>
                </head>
                <body>
                <h1>What is your name</h1>
                    <form action="/about" method="POST">
                        <input type="text" name="name">
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
            `);
    res.end();
};

const defaultPage = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>${req.url?.split('/')[1].toUpperCase()}</title>
                </head>
                <body>
                <h1>You are on page ${req.url?.split('/')[1]}</h1>
                </body>
            </html>
            `);
    res.end();
};

const requestListener = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const { url, method } = req;

    res.statusCode = 200;
    if (url === '/about') {
        if (method === 'POST') {
            handleNamePostRequest(req, res);
            return;
        }
        aboutPage(req, res);
        return;
    }

    defaultPage(req, res);
    return;
};

const server = http.createServer(requestListener);

server.listen(PORT);
