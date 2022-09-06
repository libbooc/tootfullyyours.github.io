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
 * @description Add appoitnemmnt
 * @method GET/add-appointment
 */
route.get('/add-appointment', services.add_appointment);


/**
 * @description for update appointment
 * @method GET/update-appointment
 */
route.get('/update-appointment', services.update_appointment);

// API

route.post('/api/appointment', controller.create);
route.get('/api/appointment', controller.find);
route.put('/api/appointment/:id', controller.update);
route.delete('/api/appointment/:id', controller.delete);


module.exports = route