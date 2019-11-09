import { requireAuth, requireAdmin } from '../config/passport';
import { create, findAll, findOne, update, remove, upload, saveFile } from '../controllers/user';
import { createNoPermission } from '../controllers/user';

export default function(router) {
  // Create a new user without permissions!
  router.post('/register', upload, saveFile, createNoPermission);

  // Create a new user
  router.post('/users', requireAuth, requireAdmin, create);

  // Retrieve all Users
  router.get('/users', requireAuth, requireAdmin, findAll);

  // Retrieve a single User with userId
  router.get('/user/:userId', requireAuth, requireAdmin, findOne);

  // Update a User with userId
  router.put('/user/:userId', requireAuth, requireAdmin, upload, saveFile, update);

  // Delete a User with userId
  router.delete('/user/:userId', requireAuth, requireAdmin, remove);
}
