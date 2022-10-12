// Check

const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    // Make a get request to /api/patientProfile
    axios.get("http://localhost:5000/api/patientProfile")
        .then(function(response){
            res.render('update_patientProfile', {patientProfile: response.data});
        })

    .catch(err =>{  
        res.send(err);
    })

}

exports.patientProfile = (req, res) =>{
    res.render('patientProfile');
}

exports.patientProfile = (req, res) =>{
    axios.get("http://localhost:5000/api/patientProfile", {params:{id:req.query.id}})
        .then(function(patientProfiledata){
            res.render("patientProfile", {patientProfile: patientProfiledata.data})
        })
    .catch(err =>{
        res.send(err);
    })

}

