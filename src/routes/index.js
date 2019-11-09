import { Router } from "express";
import moviesRouter from "./movies";
import seriesRoutes from "./series";
import info from "../../package.json";

const router = Router();

// Root "/" page.
router.get("/", (request, response) => {
  response.json({ version: info.version });
});

// Movies routes
moviesRouter(router);
// series routes
seriesRoutes(router);

export default router;
