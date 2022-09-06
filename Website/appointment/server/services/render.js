// // Check

const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    // Make a get request to /api/apponinTment
    axios.get("http://localhost:4000/api/appointment")
        .then(function(response){
            res.render('index', {appointment: response.data});
        })

    .catch(err =>{
        res.send(err);
    })


   
}


exports.add_appointment = (req, res) =>{
    res.render('add_appointment');
}

exports.update_appointment = (req, res) =>{
    axios.get("http://localhost:4000/api/appointment",{params:{id:req.query.id}})
        .then(function(appointmentdata){
            res.render("update_appointment", {appointment: appointmentdata.data})
        })
    .catch(err =>{
        res.send(err);
    })

}