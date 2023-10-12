const http = require('http');
const fs = require('fs');
const urlEmitter = require('./emitter');

//Create a server
const server = http.createServer((req, res) => {
    const url = req.url;
    //set the folder to be read
    let filePath = "./views/";
    // Emit the route as an event
    urlEmitter.emit(url); 

    switch (url) {
        case '/about':
            filePath += "about.html";
            break;
        case '/contact':
            filePath += "contact.html";
            break;
        case '/products':
            filePath += "products.html";
            break;
        case '/subscribe':
            filePath += "subscribe.html";
            break;
        default:
            filePath += "index.html";
            break;
    }

    // Read the HTML file and serve it as a response
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        } else {
            // console.log(`${url} page`); ->now proingvided by eventEmitter
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});


server.on('connection', () => {
    console.log('A new connection has been established');
});

server.listen(3000);
console.log('Listening on http://localhost:3000');

module.exports = server;
