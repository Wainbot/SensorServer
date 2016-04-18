var express = require('express');
var request = require('request');

var router  = express.Router();

var Devices = require('../models/Devices.js');
var Sensors = require('../models/Sensors.js');
var History = require('../models/History.js');

/**
 * Retourne la liste des devices
 */
router.get('/devices', function (req, res) {
    Devices.find(function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

/**
 * Retourne le Device
 */
router.get('/devices/:id', function (req, res) {
    Devices.find({ id: req.params.id }, function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

/**
 * Retourne la liste des Sensors du Device
 */
router.get('/devices/:id/sensors', function (req, res) {
    Sensors.find({ idDevice: req.params.id }, function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

/**
 * Retourne la liste des Sensors
 */
router.get('/sensors', function (req, res) {
    Sensors.find(function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

/**
 * Retourne le Sensor
 */
router.get('/sensors/:id', function (req, res) {
    Sensors.find({ id: req.params.id }, function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

/**
 * Retourne l'historique d'un Sensor
 */
router.get('/sensors/:id/history', function (req, res) {
    History.find({ idSensor: req.params.id }, function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

/**
 * Retourne tout l'historique
 */
router.get('/history', function (req, res) {
    History.find(function (err, data) {
        if (err) res.send(err);
        res.json(data);
    });
});

/**
 * Met à jour l'historique d'un Sensor
 */
router.get('/update/:idDevice/:idSensor/history', function (req, res) {
    request({
        url: 'https://api.sensit.io/v1/devices/' + req.params.idDevice + '/sensors/' + req.params.idSensor,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer iPt5AYfkmCNrvIN1wXzU0Bpw3uXrcfWttfQvALUwqSuser5NDnsPMdzaJr58Wrgn'
        }
    }, function (error, response, body) {
        if (error) {
            res.send(error);
        } else {
            JSON.parse(body).data.history.forEach(function(val) {
                History.create({
                    data: val.data,
                    date: val.date,
                    idSensor: req.params.idSensor
                });
            });

            res.json(true);
        }
    });
});


router.get('/boiler', function(req, res) {
	var data = {date:'18/04/16', temp:22};
	res.json(data);
});

router.get('/alarm', function(req, res) {
	var data = {
		data:{
			date:"18/04/2016", 
			localisation: 'porte 1'
	}};
	res.json(data);
});

router.get('/alert', function(req, res) {
	var data = var data = {
		data:{
                date: '18/04/16',
                type: 'Chaudière',
                cause: 'Température trop élevée (50°C)'
		}
	};
	res.json(data);
});

module.exports = router;



















