// // Check

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    pID:{
        type: Number,
        required: true,
        unique: true
    },
    aID:{
        type: Number,
        required: true,
        unique: true
    },
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    mname:{
        type: String,
    },
    adate:{
        type: String,
        required: true,
    },
    atime:{
        type: String,
        required: true,
    },
    procedure:{
        type: String,
        required: true,
    },
    p_cnum:{
        type: Number,
        required: true,
    }

})

const Appointdb = mongoose.model('appointdb', schema);

module.exports = Appointdb
