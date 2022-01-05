const http = require('http');

const index = require('./index');

console.log(index.someText);

const server = http.createServer(index);

server.listen(4000);

// attached file name is index.js
// committed id is Node module system 