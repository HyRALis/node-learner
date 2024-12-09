import express from 'express';
import addProduct from '../pages/add-product';
import handleAddProductPostRequest from '../requestHandlers/handleAddProductPost';

const router = express.Router();

router.get('/add-product', (_req, res) => {
    addProduct(res);
});

router.post('/add-product', handleAddProductPostRequest);

export default router;
