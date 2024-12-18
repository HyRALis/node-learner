import { Request, Response } from 'express';

const handleAddProductPostRequest = (req: Request, res: Response, products: string[]) => {
    products.push(req.body.title);
    res.redirect('/admin/add-product');
};

export default handleAddProductPostRequest;
