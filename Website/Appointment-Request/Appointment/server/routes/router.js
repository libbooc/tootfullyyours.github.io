// Check


const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")
const services1 = require("../services/employee_render")
const controller1 = require("../controller/employee_controller")




route.get('/', services.homeRoutes)
route.get('/add-appointmentRequest', services.add_appointmentRequest);
route.get('/appointment', services.Appointment);


// route.post('/appointment', function(req, res){
//     controller.create_appointment
// });

// route.get('/appointment1',function(req, res){
//     controller.find_appointment;
// });

// route.delete('/appointment/:id', controller.delete_appointment);

route.get('/appointment-data', controller.find_appointment);
route.delete('/appointment:id', controller.delete_appointment);




route.post('/api/appointmentRequest', controller.create);
route.get('/api/appointmentRequest', controller.find);
route.delete('/api/appointmentRequest/:id', controller.delete);


route.get('/employee', services1.Employee)
route.get('/add-employee', services1.add_employee);
route.get('/update-employee', services1.update_employee);
route.get('/view-employee', services1.view_employee);

route.post('/api/employee', controller1.create);
route.get('/api/employee', controller1.find);
route.put('/api/employee/:id', controller1.update);
route.delete('/api/employee/:id', controller1.delete);
route.get('/api/employee/:id', controller.find);



module.exports = route