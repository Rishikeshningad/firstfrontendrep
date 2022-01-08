const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware!');
  next(); // Allows the request to continue to the middleware in line
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello to nodejs</h1>');
  res.send( { key1: value });
});

app.listen(3000);