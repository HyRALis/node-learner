import { Response } from 'express';

import { products } from '../routes/admin';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const shopPage = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');

    return res.render('shop', { metaTitle: 'My shop', products: products.filter((product) => product !== '') });
};

export default shopPage;
