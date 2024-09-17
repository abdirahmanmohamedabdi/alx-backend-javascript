const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listrn(port, () => {
});

module.exports = app; // Export the app for testing
