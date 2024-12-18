import { Request, Response } from 'express';
import { Product } from '../../models/product';

const handleAddProductPostRequest = (req: Request, res: Response) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/admin/add-product');
};

export default handleAddProductPostRequest;
