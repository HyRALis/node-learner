import express from 'express';
import addProduct from '../pages/add-product';
import handleAddProductPostRequest from '../requestHandlers/handleAddProductPost';

const router = express.Router();
export const products: string[] = [];

router.get('/add-product', (_req, res) => {
    addProduct(res);
});

router.post('/add-product', (req, res) => handleAddProductPostRequest(req, res, products));

export default router;
