import { Request, Response } from 'express';

const handleAddProductPostRequest = (req: Request, res: Response) => {
    console.log({ title: req.body.title });
    res.redirect('/admin/add-product');
};

export default handleAddProductPostRequest;
