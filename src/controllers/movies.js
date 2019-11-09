import movieModel from '../models/movie';

export const create = async (request, response) => {
  try {
    const newMovie = new movieModel(request.body);
    let result = await newMovie.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getAll = async (request, response) => {
  try {
    let result = await movieModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getPage = (request, response) => {
  movieModel
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
    const movie = await movieModel.findById(request.params.id).exec();
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const update = async (request, response) => {
  try {
    await movieModel.findOneAndUpdate({ _id: request.params.id }, request.body);
    const movie = await movieModel.findById(request.params.id).exec();
    response.send(movie);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
};

export const deleteOne = async (request, response) => {
  try {
    await movieModel.deleteOne({ _id: request.params.id }).exec();
    response.send('Movie Deleted');
  } catch (error) {
    response.status(500).send(error);
  }
};
