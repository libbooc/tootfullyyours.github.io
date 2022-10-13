// Check


const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")

route.get('/', services.homeRoutes);
route.get('/add-history', services.add_history);
route.get('/update-history', services.update_history);

route.post('/api/history', controller.create);
route.get('/api/history', controller.find);
route.put('/api/history/:id', controller.update);
route.delete('/api/history/:id', controller.delete);


module.exports = route