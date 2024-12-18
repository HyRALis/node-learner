import { Request, Response } from 'express';

import addProduct from '../utils/pages/add-product';
import handleAddProductPostRequest from '../utils/requestHandlers/handleAddProductPost';
import shopPage from '../utils/pages/shop';

export const getAddProductPage = (_req: Request, res: Response) => addProduct(res);

export const postAddProduct = (req: Request, res: Response) => handleAddProductPostRequest(req, res);

export const getShopPage = (_req: Request, res: Response) => shopPage(res);
