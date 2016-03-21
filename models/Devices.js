var mongoose = require('mongoose');

var Devices = new mongoose.Schema({
    id: Number,
    deviceModel: Number,
    serialNumber: String
});

module.exports = mongoose.model('Devices', Devices);