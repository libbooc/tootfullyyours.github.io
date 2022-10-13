// Check


const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")

route.get('/', services.homeRoutes);
route.get('/add-history', services.add_history);
route.get('/update-history', services.update_history);

route.post('/history', controller.create);
route.get('/history', controller.find);
route.put('/history/:id', controller.update);
route.delete('/history/:id', controller.delete);


module.exports = route