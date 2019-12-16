import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

// Serie schema
const produitSchema = new mongoose.Schema(
  {
    title: String,
    year: { type: Number, min: 1900, max: 2019 },
    runtime: { type: Number, min: 1 },
    poster: String
  },
  // Optional createAt and updateAt fields.
  {
    timestamps: true
  }
);

// Plugin to paginate produits list.
produitSchema.plugin(paginate);

// export produit model
export default mongoose.model('produit', produitSchema);
