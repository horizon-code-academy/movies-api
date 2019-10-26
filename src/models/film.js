const mongoose = require("mongoose")
const paginate = require("mongoose-paginate")

// Film schema
const filmSchema = new mongoose.Schema({
    title: String,
    year: { type: Number, min: 1900, max: 2019 },
    runtime: { type: Number, min: 1 },
    poster: String,
},
    // Optional createAt and updateAt fields.
    {
        timestamps: true,
    });

// Plugin to paginate films list.
filmSchema.plugin(paginate);

// export Film model 
module.exports = mongoose.model("film", filmSchema)