import serieModel from "../models/serie";

export const create = async (request, response) => {
  try {
    const newSerie = new serieModel(request.body);
    let result = await newSerie.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getAll = async (request, response) => {
  try {
    let result = await serieModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getPage = (request, response) => {
  serieModel
    .paginate(
      {},
      {
        page: request.params.pagenum,
        limit: parseInt(request.params.pagesize)
      }
    )
    .then(result => {
      response.send(result);
    })
    .error(error => {
      response.status(500).send(error);
    });
};

export const getOne = async (request, response) => {
  try {
    const serie = await serieModel.findById(request.params.id).exec();
    response.send(serie);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const update = async (request, response) => {
  try {
    await serieModel.findOneAndUpdate({ _id: request.params.id }, request.body);
    const serie = await serieModel.findById(request.params.id).exec();
    response.send(serie);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
};

export const deleteOne = async (request, response) => {
  try {
    await serieModel.deleteOne({ _id: request.params.id }).exec();
    response.send("Serie Deleted");
  } catch (error) {
    response.status(500).send(error);
  }
};
