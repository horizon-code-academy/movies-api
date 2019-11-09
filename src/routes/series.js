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
  router.post("/serie", create);

  // Get series list end-point
  router.get("/series", getAll);

  // Get series list paginated end-point
  router.get("/series/:pagesize/:pagenum", getPage);

  // Get serie end-point
  router.get("/serie/:id", getOne);

  // Update serie end-point
  router.put("/serie/:id", update);

  // Delete serie end-point
  router.delete("/serie/:id", deleteOne);
}
