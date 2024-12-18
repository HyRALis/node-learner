import { Request, Response } from 'express';

const handleNamePostRequest = (req: Request, res: Response) => {
    console.log({ name: req.body.name });
    res.redirect('/about');
};

export default handleNamePostRequest;
