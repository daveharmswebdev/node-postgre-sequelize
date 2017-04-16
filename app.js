const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// set up the express app
const app = express();

// log requests to the console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.status(200).send({
    message: 'Welcome to the continuation of this wonderful journey'
  });
});

module.exports = app;