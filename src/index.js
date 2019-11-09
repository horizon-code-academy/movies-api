import Express from "express";
import BodyParser from "body-parser";
import fs from "fs";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import { port } from "./config/env";
import routes from "./routes";

// connect to db
import "./config/db";

// folder of uploaded file: create folder project
let directory;
if (process.platform === "win32") {
  directory = path.join(process.env.APPDATA, "movies-api");
} else {
  directory = path.join(process.env.HOME, ".config", "movies-api");
}
fs.exists(directory, exists => {
  if (!exists) {
    fs.mkdir(directory, err => {
      if (err) {
        console.error(err);
        process.exit();
      }
    });
  }
});

// init Express server
const app = Express();

// enable CORS
app.use(cors());

// helmet is a package to add some security headers to the responses.
app.use(helmet());

// serve static files (images...) from upload folder project created .
if (process.platform === "win32") {
  app.use(
    "/files",
    Express.static(path.join(process.env.APPDATA, "movies-api"))
  );
} else {
  app.use(
    "/files",
    Express.static(path.join(process.env.HOME, ".config", "movies-api"))
  );
}

// enable body parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// config routes
app.use("/", routes);

// listen for requests
app.listen(port, () => {
  console.warn("Server is listening on port: " + port);
});
