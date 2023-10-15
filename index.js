// const { readFile, readFileSync } = require('fs');
// // anything that includes Sync === Blocking
// // in other words, this means it needs to finish everything it is doing before we can run any other code

// // this is how we read the text file in node
// // utf8 is the encoding
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt)
// console.log('do this ASAP')

// // the problem with the above method is that Sync causes the remaining code to wait for it to run first
// // the solution to this is using readFile and putting the console.log() in the callback function

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });
// console.log('do this ASAP 2')

// // Using the asynchronous promise based solution tends to produce much cleaner code compared to callbacks with the same benefits

// const {readFile} = require('fs').promises;

// async function hello() { 
//     const file = await readFile('./hello.txt', 'utf8');
//     console.log(file);
// }

// // Modules and NPM
// // A module is a JS file that exports its code
// // The traditional way to import a function in node is using require()
// // Node now has the new ES Modules import syntax, which involves using import/export

// const myModule = require('./my-module');
// console.log(myModule);

// const { readFile, readFileSync } = require('fs');

// const express = require('express');
// const app = express();

// // request is incoming data from user
// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if (err) {
//             response.status(500).send('sorry, out of order')
//         }
//         response.send(html);
//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))

const { readFile } = require('fs').promises;

const express = require('express');
const app = express();

// request is incoming data from user
app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8') );
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))