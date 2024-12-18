import { Response } from 'express';

import { NAV_LINKS } from '../consts';
import { Product } from '../../models/product';

/**
 * Renders about page
 * @param {Response} res
 */

const shopPage = (res: Response) => {
    const shopNavLinks = { ...NAV_LINKS, shop: { ...NAV_LINKS.shop, isActive: true } };

    res.setHeader('Content-Type', 'text/html');
    return res.render('shop', {
        metaTitle: 'My shop',
        products: Product.fetchAll(),
        navLinks: Object.values(shopNavLinks),
        stylesheets: []
    });
};

export default shopPage;
