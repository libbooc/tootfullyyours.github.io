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
 * @description Add patient appointmentRequest
 * @method GET/add-appointmentRequest
 */
route.get('/add-appointmentRequest', services.add_appointmentRequest);


/**
 * @description for update patient appointmentRequest
 * @method GET/update-appointmentRequest
 */
// route.get('/update-appointmentRequest', services.update_appointmentRequest);

// route.get('/view-appointmentRequest', services.view_appointmentRequest);

// API


route.post('/api/appointmentRequest', controller.create);
route.get('/api/appointmentRequest', controller.find);
// route.put('/api/appointmentRequest/:id', controller.update);
route.delete('/api/appointmentRequest/:id', controller.delete);
// route.get('/api/appointmentRequest/:id', controller.find);


module.exports = route