import produitModel from '../models/produit';

export const create = async (request, response) => {
  try {
    const newSerie = new produitModel(request.body);
    let result = await newSerie.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getAll = async (request, response) => {
  try {
    let result = await produitModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getPage = (request, response) => {
  produitModel
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
    const produit = await produitModel.findById(request.params.id).exec();
    response.send(produit);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const update = async (request, response) => {
  try {
    await produitModel.findOneAndUpdate({ _id: request.params.id }, request.body);
    const produit = await produitModel.findById(request.params.id).exec();
    response.send(produit);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
};

export const deleteOne = async (request, response) => {
  try {
    await produitModel.deleteOne({ _id: request.params.id }).exec();
    response.send('Serie Deleted');
  } catch (error) {
    response.status(500).send(error);
  }
};
