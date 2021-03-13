'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the game'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['Unplayed', 'Playing', 'Played', 'Completed']
    }],
    default: ['Unplayed']
  }
});

module.exports = mongoose.model('Games', GameSchema);