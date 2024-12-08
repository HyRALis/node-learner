import * as http from 'http';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const aboutPage = (res: http.ServerResponse<http.IncomingMessage>) => {
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

export default aboutPage;
