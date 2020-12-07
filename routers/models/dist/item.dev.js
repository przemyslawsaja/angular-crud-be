"use strict";

var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Item', itemSchema);