/*
3.	Every time a specific route was accessed and write a message to the console

an example of wanting to capture and log an event while running a web server would be to use it when a specific route was accessed. Implementing event logging to gain insights into user interactions with specific routes on your website can help to track user engagement and make informed decisions to enhance the user experience.

Below is an emitter that gets fired when a specific route is accessed on the server

*/


// define/extend an EventEmitter class
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

// initialize an new emitter object
const urlEmitter = new MyEmitter();

urlEmitter.addListener('/about', () => console.log(`About Page`));
urlEmitter.addListener('/subscribe', () => console.log(`Subscribe Page`));
urlEmitter.addListener('/contact', () => console.log(`Contact Page`));
urlEmitter.addListener('/products', () => console.log(`Products Page`));
urlEmitter.addListener('default', () => console.log(`Home Page`));

// Emit the event in http.js when the server is created (line 11)
module.exports = urlEmitter;