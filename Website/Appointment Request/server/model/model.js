//Check

const mongoose = require('mongoose');

var appointmentRequestSchema = new mongoose.Schema({
    p_name:{ type: String, required: true},
    p_email:{type: String, required: true},
    p_phoneNum:{type: Number, required: true},
    p_message:{type: String, required: true},  
   
})

const appointmentRequestdb = mongoose.model('appointmentRequestdb', appointmentRequestSchema);

module.exports = appointmentRequestdb
