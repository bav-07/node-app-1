console.log('hello world');

// Know the node runtime
// Node is an asynchronous, event-driven JS runtime
// The runtime implements an event loop, just like a web browser does
// Allows node to push intensive operations off to a separate thread
// Only very fast non-blocking operations happen on the main thread
// It enables node to be very effective for high throughput purposes such as web servers, real-time applications

// JS runs the same way in a node app as it does in a browser, with a few differences

// global is a global namespace object available throughout the entire node process
// global can be compared to the front-end window object in the browser
global.luckyNum = '23';
console.log(global.luckyNum);

// the most important global to be familiar with is process
// this allows you to access the currently running process
console.log(process.platform);
console.log(process.env.USER);

// How do events (and callbacks) work in nodejs?

// The event in this case is 'exit' and the callback function is the `function()` specified
// The callback function only runs when the specified event occurs
process.on('exit', function() {
    // do something!!
})

// You can create your own events as follows
// Firstly create an event emitter
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

// similair format to before, now we are using an arrow function as our callback function is the main difference
eventEmitter.on('lunch', () => {
    console.log('yum');
})

// emit the event to call the callback function
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');