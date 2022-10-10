// Check


const express = require('express');
const route = express.Router()
const services = require("../services/employee_render")
const controller = require("../controller/employee_controller")


route.get('/toothfully/Employee', services.Employee)
route.get('/add-employee', services.add_employee);
route.get('/update-employee', services.update_employee);
route.get('/view-employee', services.view_employee);

route.post('/api/employee', controller.create);
route.get('/api/employee', controller.find);
route.put('/api/employee/:id', controller.update);
route.delete('/api/employee/:id', controller.delete);
route.get('/api/employee/:id', controller.find);


module.exports = route