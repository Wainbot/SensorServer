var express  = require('express');
var router   = express.Router();

var Devices  = require('../models/Devices.js');
var Sensors  = require('../models/Sensors.js');
var History  = require('../models/History.js');

router.get('/', function(req, res) {
    Devices.find(function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

module.exports = router;
