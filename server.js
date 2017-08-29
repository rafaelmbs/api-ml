'use strict';

var http = require('http');
var api = require('./src/config/api');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || api.port

var index = require('./routes/index-route');
var categories = require('./routes/categories-route');
var items = require('./routes/items-route');
var users = require('./routes/users-route');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/categories', categories);
app.use('/items', items);
app.use('/users', users);

let server = module.exports = app;

server.listen(port, function() {
    console.log('Server listening at http://localhost:' + port);
});