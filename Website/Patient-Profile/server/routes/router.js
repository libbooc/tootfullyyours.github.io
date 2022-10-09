// Check


const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")
/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description Add patient patientProfile
 * @method GET/add-patientProfile
 */
route.get('/patientProfile', services.patientProfile);


/**
 * @description for update patient patientProfile
 * @method GET/update-patientProfile
 */
route.get('/update-patientProfile', services.patientProfile);



// API


route.post('/api/patientProfile', controller.create);
route.get('/api/patientProfile', controller.find);
route.put('/api/patientProfile/:id', controller.update);


module.exports = route