var mongoose = require('mongoose');

var History = new mongoose.Schema({
    id: Number,
    data: Number,
    date: Date,
    sensor: { type: mongoose.Schema.Types.ObjectId, ref: 'Sensors' }
});

module.exports = mongoose.model('History', History);