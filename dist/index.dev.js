"use strict";

var express = require('express');

var mongoose = require('mongoose');

var itemsRotuer = require('./routers/items');

var cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;
var uri = "mongodb+srv://admin:admin@assessment.ijve7.mongodb.net/CRUD?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', function () {
  console.log('Mongoose is connedted!');
});
app.use(cors());
app.use(express.json());
app.use('/items', itemsRotuer);
app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});