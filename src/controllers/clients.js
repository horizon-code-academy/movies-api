import clientModel from '../models/client';

export const create = async (request, response) => {
  try {
    const newMovie = new clientModel(request.body);
    let result = await newMovie.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getAll = async (request, response) => {
  try {
    let result = await clientModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getPage = (request, response) => {
  clientModel
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
    const client = await clientModel.findById(request.params.id).exec();
    response.send(client);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const update = async (request, response) => {
  try {
    await clientModel.findOneAndUpdate({ _id: request.params.id }, request.body);
    const client = await clientModel.findById(request.params.id).exec();
    response.send(client);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
};

export const deleteOne = async (request, response) => {
  try {
    await clientModel.deleteOne({ _id: request.params.id }).exec();
    response.send('Movie Deleted');
  } catch (error) {
    response.status(500).send(error);
  }
};
