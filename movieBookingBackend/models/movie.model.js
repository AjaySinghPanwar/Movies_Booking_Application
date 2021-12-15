const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema(
    {
        "movieid": Number,
        "title" : String,
        "published" : Boolean,
        "released" : Boolean,
        "poster_url" : String,
        "release_date" : String,
        "publish_date" : String,
        "artists" : Array,
        "genres" : Array,
        "duration" : Number,
        "critic_rating" : Number,
        "trailer_url" : String,
        "wiki_url" : String,
        "story_line" : String,
        "shows" : Array,
    },
    {
        timestamps: true
    }
);

const Movies = mongoose.model("Movie", movieSchema);
module.exports = Movies;