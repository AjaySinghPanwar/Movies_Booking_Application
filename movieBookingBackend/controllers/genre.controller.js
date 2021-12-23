const db = require("../models");
const Genre = db.genres;

//Finding all artists
const findAllGenres = (req, res) => {
    Genre.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Genres data" })
        })
};

module.exports = { findAllGenres };