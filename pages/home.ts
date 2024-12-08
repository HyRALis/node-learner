import * as http from 'http';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const homePage = (res: http.ServerResponse<http.IncomingMessage>) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>Home</title>
                </head>
                <body>
                <h1>Create user</h1>
                <h3>What is the user's name</h3>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
            `);
    return res.end();
};

export default homePage;
