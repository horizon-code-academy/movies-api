import Express from "express";
import BodyParser from "body-parser";
import cors from "cors";
import { port } from "./config/env";
import routes from "./routes"

// connect to db
import "./config/db";

// init Express server
const app = Express();

// enable CORS
app.use(cors());

// enable body parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// config routes
app.use('/', routes);

// listen for requests
app.listen(port, () => {
  console.warn("Server is listening on port: " + port);
});
