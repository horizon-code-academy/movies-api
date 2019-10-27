const mongoose = require("mongoose")
const paginate = require("mongoose-paginate")

// Serie schema
const serieSchema = new mongoose.Schema({
    title: String,
    year: { type: Number, min: 1900, max: 2019 },
    runtime: { type: Number, min: 1 },
    poster: String,
},
    // Optional createAt and updateAt fields.
    {
        timestamps: true,
    });

// Plugin to paginate series list.
serieSchema.plugin(paginate);

// export serie model 
module.exports = mongoose.model("serie", serieSchema)