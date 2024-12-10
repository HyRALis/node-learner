import path from 'path';

import { Response } from 'express';
import roodDirPath from '../utils/rootDirPath';

/**
 * Renders about page
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */

const addProduct = (res: Response) => {
    res.setHeader('Content-Type', 'text/html');
    return res.render('add-product', { metaTitle: 'Add Product' });
};

export default addProduct;
