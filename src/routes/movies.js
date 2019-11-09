import {
  create,
  getAll,
  getPage,
  getOne,
  update,
  deleteOne
} from "../controllers/movies";

export default function(router) {
  // Create movie end-point
  router.post("/movie", create);

  // Get movies list end-point
  router.get("/movies", getAll);

  // Get movies list paginated end-point
  router.get("/movies/:pagesize/:pagenum", getPage);

  // Get movie end-point
  router.get("/movie/:id", getOne);

  // Update movie end-point
  router.put("/movie/:id", update);

  // Delete movie end-point
  router.delete("/movie/:id", deleteOne);
}
