import * as http from 'http';

const usersPage = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>${req.url?.split('/')[1].toUpperCase()}</title>
            </head>
            <body>
                <h3 style="text-transform: capitalize;">
                    You are on page ${req.url?.split('/')[1]}
                </h3>
                <ul style="list-style: none;">
                    <li>John</li>
                    <li>Peter</li>
                    <li>Bob</li>
                </ul>
            </body>
        </html>
    `);
    return res.end();
};

export default usersPage;
