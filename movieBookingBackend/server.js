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

console.log("Server is listening on 9000");