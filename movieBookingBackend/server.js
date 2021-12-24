const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

/*
//Using node to create server
const http = require('http');

const app = http.createServer((req, res) =>{
    if(req.url === "/movies"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('All Movies Data in JSON format from Mongo DB');
        res.end();
    }

    else if(req.url === '/genres'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('All Genres Data in JSON format from Mongo DB');
        res.end();
    }

    else if(req.url === '/artists'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('All Artists Data in JSON format from Mongo DB');
        res.end();
    }
});
app.listen(9000);
*/

// Running on port 9000
const PORT = 9000;

var corsOptions = {
  origin: "http://localhost:" + PORT
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

require("./routes/movie.routes")(app);
require("./routes/artist.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT);

console.log("Server is listening on 9000");