import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

// Movie schema
const clientSchema = new mongoose.Schema(
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

// Plugin to paginate clients list.
clientSchema.plugin(paginate);

// export Movie model
export default mongoose.model('client', clientSchema);
