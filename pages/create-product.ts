import { Response } from 'express';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const createProduct = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.send(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>Create Product</title>
                </head>
                <body>
                <h1>What is the name of your product?</h1>
                    <form action="/product" method="POST">
                        <input type="text" name="title">
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
            `);
};

export default createProduct;
