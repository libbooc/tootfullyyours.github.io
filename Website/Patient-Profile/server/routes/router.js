// Check


const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")

route.get('/', services.homeRoutes);
route.get('/patientProfile', services.patientProfile);
route.get('/update-patientProfile', services.patientProfile);

// API
route.get('/api/patientProfile', controller.find);
route.put('/api/patientProfile/:id', controller.update);


module.exports = route