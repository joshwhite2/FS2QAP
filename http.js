const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    // Use a switch statement to handle different routes
    switch (url) {
        case '/about':
            console.log('About page');
            res.write("About Page");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('About Page');
            break;
        case '/contact':
            console.log('Contact page');
            res.write("Contact Page");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('Contact Page');
            break;
        case '/products':
            console.log('Products page');
            res.write("Products Page");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('Products Page');
            break;
        case '/subscribe':
            console.log('Subscribe page');
            res.write("Subscribe Page");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('Subscribe Page');
            break;
        default:
            res.write("Home Page");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('Home Page');
            break;
    }})
;

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World');
        
//         res.end();
//     }else if(req.url === '/about'){
//         res.write(
//             'About page yeyuh' );
//         res.end();
//     }else if(req.url === '/contact'){
//         res.write(
//             'Contact page');
//         res.end();
//     }}
// )

server.on('connection', () => {
    console.log('A new connection has been established');
});
server.listen(3000);

console.log('listening on 3000');
