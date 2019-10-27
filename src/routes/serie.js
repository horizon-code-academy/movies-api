const serieModel = require("../models/serie");

module.exports = router => {
  // Create serie end-point
  router.post("/serie", async (request, response) => {
    try {
      const newSerie = new serieModel(request.body);
      let result = await newSerie.save();
      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  // Get series list end-point
  router.get("/series", async (request, response) => {
    try {
      let result = await serieModel.find().exec();
      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  // Get series list paginated end-point
  router.get("/series/:pagenum", (request, response) => {
    serieModel
      .paginate({}, { page: request.params.pagenum, limit: 4 })
      .then(result => {
        response.send(result);
      })
      .error(error => {
        response.status(500).send(error);
      });
  });

  // Get serie end-point
  router.get("/serie/:id", async (request, response) => {
    try {
      const serie = await serieModel.findById(request.params.id).exec();
      response.send(serie);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  // Update serie end-point
  router.put("/serie/:id", async (request, response) => {
    try {
      await serieModel.findOneAndUpdate(
        { _id: request.params.id },
        request.body
      );
      const serie = await serieModel.findById(request.params.id).exec();
      response.send(serie);
    } catch (error) {
      console.error(error);
      response.status(500).send(error);
    }
  });

  // Delete serie end-point
  router.delete("/serie/:id", async (request, response) => {
    try {
      let result = await serieModel.deleteOne({ _id: request.params.id }).exec();
      response.send("Serie Deleted");
    } catch {
      response.status(500).send(error);
    }
  });
};
