const db = require("../models");
const Movie = db.movies;

//Find all movies
const findAllMovies = (req, res) => {
    let status = req.query.status;
    console.log(status);

    let condition = {};

    if (status) {
        status = status.toLowerCase();
        condition[status] = true;
    }

    console.log(status);

    console.log(condition);

    Movie.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Movie data."
            });
        })
};

//Finding movies by a given id
const findOne = (req, res) => {
    const id = req.params.movieId;

    Movie.findById({ movieId: id })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Movie with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Movie with id=" + id });
        });
};


//Fetch details of shows of a specific movie given its id.
const findShows = (req, res) => {
    const id = req.params.movieId;

    Movie.findById({ movieId: id }).shows
        .then(data => {
            if (!data || data.length === 0) {
                res.status(404).send({ message: "Not found shows with id " + id });
            }
            else {
                res.send(show);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Movie with id=" + id });
        });
};

module.exports = { findAllMovies, findOne, findShows };