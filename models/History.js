var mongoose = require('mongoose');

var History = new mongoose.Schema({
    data: String,
    date: Date,
    idSensor: Number
});

module.exports = mongoose.model('History', History);