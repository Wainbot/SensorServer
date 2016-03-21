var mongoose = require('mongoose');

var Sensors = new mongoose.Schema({
    id: Number,
    type: String,
    idDevice: Number
});

module.exports = mongoose.model('Sensors', Sensors);