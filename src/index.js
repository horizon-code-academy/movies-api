const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const cors = require('cors')

const info = require("../package.json");
const filmRoutes = require("./routes/film");

const app = Express();

app.use(cors())

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// set up Mongoose connection
Mongoose.connect("mongodb://localhost/filmsdb", { useNewUrlParser: true });

// Root "/" page. 
app.get("/",(request, response) => {
   response.json({version: info.version});
});

// Films routes
filmRoutes(app);

app.listen(5000, () => {
    console.log("listeninig at :5000 ...")
});








