//Check

const mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
    transNo:{
        type: Number,
        required: true,
        unique: true,
        sparse: true
    },
    phdate:{
        type: String,
        required: true,
        unique: true
    },
    toothNo:{
        type: String,
        required: true,
    },
    procedure:{
        type: String,
        required: true,
    },
    payments:{
        type: Number,
        required: true,
    }

})

const Historydb = mongoose.model('Historydb', historySchema);

module.exports = Historydb
