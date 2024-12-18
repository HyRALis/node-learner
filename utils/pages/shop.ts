import { Response } from 'express';

import { NAV_LINKS } from '../consts';
import { products } from '../../controllers/products';

/**
 * Renders about page
 * @param {Response} res
 */

const shopPage = (res: Response) => {
    const shopNavLinks = { ...NAV_LINKS, shop: { ...NAV_LINKS.shop, isActive: true } };

    res.setHeader('Content-Type', 'text/html');
    return res.render('shop', {
        metaTitle: 'My shop',
        products: products.filter((product) => product !== ''),
        navLinks: Object.values(shopNavLinks)
    });
};

export default shopPage;
