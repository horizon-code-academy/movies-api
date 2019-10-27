const filmModel = require("../models/film");

module.exports = router => {
  // Create film end-point
  router.post("/film", async (request, response) => {
    try {
      const newFilm = new filmModel(request.body);
      let result = await newFilm.save();
      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  // Get films list end-point
  router.get("/films", async (request, response) => {
    try {
      let result = await filmModel.find().exec();
      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  // Get films list paginated end-point
  router.get("/films/:pagenum", (request, response) => {
    filmModel
      .paginate({}, { page: request.params.pagenum, limit: 6 })
      .then(result => {
        response.send(result);
      })
      .error(error => {
        response.status(500).send(error);
      });
  });

  // Get film end-point
  router.get("/film/:id", async (request, response) => {
    try {
      const film = await filmModel.findById(request.params.id).exec();
      response.send(film);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  // Update film end-point
  router.put("/film/:id", async (request, response) => {
    try {
      await filmModel.findOneAndUpdate(
        { _id: request.params.id },
        request.body
      );
      const film = await filmModel.findById(request.params.id).exec();
      response.send(film);
    } catch (error) {
      console.error(error);
      response.status(500).send(error);
    }
  });

  // Delete film end-point
  router.delete("/film/:id", async (request, response) => {
    try {
      let result = await filmModel.deleteOne({ _id: request.params.id }).exec();
      response.send("Film Deleted");
    } catch {
      response.status(500).send(error);
    }
  });
};
