import { Request, Response } from 'express';
import { IUsers } from '../types/main-types';

const handleAddProductPostRequest = (req: Request, res: Response, users: IUsers) => {
    users.push(req.body.name);
    res.redirect('/users');
};

export default handleAddProductPostRequest;
