import { Response } from 'express';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const addProduct = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.send(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>Add Product</title>
                </head>
                <body>
                <h1>What is the name of your product?</h1>
                    <form action="/admin/add-product" method="POST">
                        <input type="text" name="title">
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
            `);
};

export default addProduct;
