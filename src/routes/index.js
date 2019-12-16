import { Router } from 'express';

import clientsRouter from './clients';
import produitsRouter from './produits';
import usersRouter from './users';
import authRouter from './authentication';

import info from '../../package.json';

const router = Router();

// Root "/" page.
router.get('/', (request, response) => {
  response.json({ version: info.version });
});

// Authentication routes
authRouter(router);
// User routes
usersRouter(router);
// Movies routes
clientsRouter(router);
// series routes
produitsRouter(router);

export default router;
