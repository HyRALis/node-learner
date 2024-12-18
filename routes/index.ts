import express from 'express';

import handleAddUser from '../requestHandlers/handleAddUser';
import homePage from '../pages/home';
import addUsersPage from '../pages/addUsersPage';
import usersPage from '../pages/users';

import { IUsers } from '../types/main-types';

const router = express.Router();
export const users: IUsers = [];

router.get('/', (_req, res) => {
    homePage(_req, res);
});

router.get('/add-user', (_req, res) => {
    addUsersPage(res);
});

router.post('/users', (req, res) => handleAddUser(req, res, users));

router.get('/users', (_req, res) => usersPage(res));

export default router;
