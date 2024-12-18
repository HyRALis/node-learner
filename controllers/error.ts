import { Request, Response } from 'express';
import pageNotFoundPage from '../utils/pages/404';

export const get404Page = (_req: Request, res: Response) => pageNotFoundPage(res);
