import { Response } from 'express';
import { NAV_LINKS } from '../consts';

/**
 * Renders about page
 * @param {Response} res
 */

const addProduct = (res: Response) => {
    const addProductNavLinks = { ...NAV_LINKS, addProduct: { ...NAV_LINKS.addProduct, isActive: true } };

    res.setHeader('Content-Type', 'text/html');
    return res.render('add-product', {
        metaTitle: 'Add Product',
        navLinks: Object.values(addProductNavLinks),
        stylesheets: []
    });
};

export default addProduct;
