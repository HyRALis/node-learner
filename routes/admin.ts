import express from 'express';
import { getAddProductPage, postAddProduct } from '../controllers/products';

const router = express.Router();

router.get('/add-product', (req, res) => {
    getAddProductPage(req, res);
});

router.post('/add-product', (req, res) => postAddProduct(req, res));

export default router;
