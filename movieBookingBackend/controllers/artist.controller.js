const db = require("../models");
const Artist = db.artists;

//Finding all artists
const findAllArtists = (req, res) => {
    Artist.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Artists data" })
        })
};

module.exports = { findAllArtists };