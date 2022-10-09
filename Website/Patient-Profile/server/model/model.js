
const mongoose = require('mongoose');

var patientProfileSchema = new mongoose.Schema({
    // p_name:{ type: String, required: true},
    // p_email:{type: String, required: true},
    // p_phoneNum:{type: Number, required: true},
    p_birthDate:{type: String, required: true},  
    p_age:{type: Number, required: true},  
    p_gender:{type: String, required: true},  
    p_nationality:{type: String, required: true},  
    p_homeAddress:{type: String, required: true},  
    p_ECFullname:{type: String, required: true},  
    p_ECNumber:{type: Number, required: true},  
    p_ECRelationship:{type: String, required: true}
})

const PatientProfiledb = mongoose.model('PatientProfiledb', patientProfileSchema);

module.exports = PatientProfiledb
