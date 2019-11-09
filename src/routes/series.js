import { requireAuth, requireAdmin } from "../config/passport";
import {
  create,
  getAll,
  getPage,
  getOne,
  update,
  deleteOne
} from "../controllers/series";

export default function(router) {
  // Create serie end-point
  router.post("/serie", requireAuth, requireAdmin, create);

  // Get series list end-point
  router.get("/series", requireAuth, getAll);

  // Get series list paginated end-point
  router.get("/series/:pagesize/:pagenum", requireAuth, getPage);

  // Get serie end-point
  router.get("/serie/:id", requireAuth, getOne);

  // Update serie end-point
  router.put("/serie/:id", requireAuth, requireAdmin, update);

  // Delete serie end-point
  router.delete("/serie/:id", requireAuth, requireAdmin, deleteOne);
}
