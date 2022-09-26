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
 * @description Add patient history
 * @method GET/add-history
 */
route.get('/add-history', services.add_history);


/**
 * @description for update patient history
 * @method GET/update-history
 */
route.get('/update-history', services.update_history);

// API

route.post('/api/history', controller.create);
route.get('/api/history', controller.find);
route.put('/api/history/:id', controller.update);
route.delete('/api/history/:id', controller.delete);


module.exports = route