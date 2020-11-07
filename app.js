var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var {initMessage, notFoundEndpoint} = require('./utils/messages')

var port = 3900;

// Ejecutar express (http)
var app = express();

var mutantRouter = require('./routes/mutantRoute');


// Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(function(req, res, next) {
  if (req.headers['content-type'] === 'application/json;') {
    req.headers['content-type'] = 'application/json';
  }
  next();
});

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//file routes
app.get('/', initMessage);
app.use('/mutant', mutantRouter);
app.use('*', notFoundEndpoint);

module.exports = app;
