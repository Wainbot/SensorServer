var mongoose = require('mongoose');

var Sensors = new mongoose.Schema({
    id: Number,
    type: String,
    device: { type: mongoose.Schema.Types.ObjectId, ref: 'Devices' }
});

module.exports = mongoose.model('Sensors', Sensors);