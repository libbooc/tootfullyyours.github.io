// Check


const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")
const services1 = require("../services/employee_render")
const controller1 = require("../controller/employee_controller")
const services2 = require("../services/history_render")
const controller2 = require("../controller/history_controller")

// Routes for Home Route/Starting Route

route.get('/', services.homeRoutes)


// Routes for Appointments

route.get('/appointment', services.Appointment);
route.get('/appointment-data', controller.find_appointment);
route.delete('/appointment/:id', controller.delete_appointment);


// Routes for Appointmment Request


route.get('/add-appointmentRequest', services.add_appointmentRequest);
route.post('/api/appointmentRequest', controller.create);
route.get('/api/appointmentRequest', controller.find);
route.delete('/api/appointmentRequest/:id', controller.delete);

// Routes for Adding, Viewing, Updating, and Deleting Employee


route.get('/employee', services1.Employee)
route.get('/add-employee', services1.add_employee);
route.get('/update-employee', services1.update_employee);
route.get('/view-employee', services1.view_employee);

route.post('/api/employee', controller1.create);
route.get('/api/employee', controller1.find);
route.put('/api/employee/:id', controller1.update);
route.delete('/api/employee/:id', controller1.delete);
route.get('/api/employee/:id', controller.find);


// Routes for Patient History Transactions


route.get('/history', services2.history);
route.get('/add-history', services2.add_history);
route.get('/update-history', services2.update_history);

route.post('/history', controller2.create);
route.get('/history', controller2.find);
route.put('/history/:id', controller2.update);
route.delete('/history/:id', controller2.delete);



module.exports = route