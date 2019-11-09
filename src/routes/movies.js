import { requireAuth, requireAdmin } from '../config/passport';
import { create, getAll, getPage, getOne, update, deleteOne } from '../controllers/movies';

export default function(router) {
  // Create movie end-point
  router.post('/movie', requireAuth, requireAdmin, create);

  // Get movies list end-point
  router.get('/movies', requireAuth, getAll);

  // Get movies list paginated end-point
  router.get('/movies/:pagesize/:pagenum', requireAuth, getPage);

  // Get movie end-point
  router.get('/movie/:id', requireAuth, getOne);

  // Update movie end-point
  router.put('/movie/:id', requireAuth, requireAdmin, update);

  // Delete movie end-point
  router.delete('/movie/:id', requireAuth, requireAdmin, deleteOne);
}
