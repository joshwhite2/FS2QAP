
/*
5.	Every time a file was successfully read and write a message to the console.

We would want to capture and log an event when a file was successfully read and written to the server, so that we can track interactions, and ensure the file system is being properly accessed.

Below is an emitter that gets fired when a file is successfully read
*/

// define/extend an EventEmitter class
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

//Create a new Emitter

const urlEmitter = new MyEmitter();

// Listen for the 'fileRead' event and log a message
urlEmitter.on('fileRead', (url) => {
    console.log(`HTML file for route "${url}" has been properly read.`);
});


/*
3.	Every time a specific route was accessed and write a message to the console

an example of wanting to capture and log an event while running a web server would be to use it when a specific route was accessed. Implementing event logging to gain insights into user interactions with specific routes on your website can help to track user engagement and make informed decisions to enhance the user experience.

Below is an emitter that gets fired when a specific route is accessed on the server

*/


// we are able to re-use the same emitter, to log a different event


urlEmitter.addListener('/about', () => console.log(`About Page`));
urlEmitter.addListener('/subscribe', () => console.log(`Subscribe Page`));
urlEmitter.addListener('/contact', () => console.log(`Contact Page`));
urlEmitter.addListener('/products', () => console.log(`Products Page`));
urlEmitter.addListener('default', () => console.log(`Home Page`));

// Emit the event in http.js when the server is created (lines 11 & 40 )
module.exports = urlEmitter;