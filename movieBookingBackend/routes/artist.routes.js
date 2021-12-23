module.exports = app => {
    const artist = require("../controllers/artist.controller");

    var router = require("express").Router();

    router.get('/artists', artist.findAllArtists);

    app.use('/api', router);
};