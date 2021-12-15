const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = Schema(
    {
        "genreid": Number,
        "genre" : String,
    },
    {
        timestamps: true
    }
);

const Genres = mongoose.model("Genre", genreSchema);
module.exports = Genres;