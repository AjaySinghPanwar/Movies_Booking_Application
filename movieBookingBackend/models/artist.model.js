const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = Schema(
    {
        "id": Number,
        "firstName" : String,
        "lastName" : String,
        "wiki_url" : String,
        "profile_url" : String,
        "movies" : Array,
    },
    {
        timestamps: true
    }
);

const Artists = mongoose.model("Artist", artistSchema);
module.exports = Artists;