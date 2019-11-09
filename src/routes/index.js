import { Router } from 'express';

import moviesRouter from './movies';
import seriesRoutes from './series';
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
moviesRouter(router);
// series routes
seriesRoutes(router);

export default router;
