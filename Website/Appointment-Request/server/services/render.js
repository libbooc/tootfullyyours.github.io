// Check

const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    // Make a get request to /api/appointmentRequest
    axios.get("http://localhost:5000/api/appointmentRequest")
        .then(function(response){
            res.render('appointmentRequest', {appointmentRequest: response.data});
        })

    .catch(err =>{  
        res.send(err);
    })

}

exports.add_appointmentRequest = (req, res) =>{
    res.render('add_appointmentRequest');
}

// exports.update_appointmentRequest = (req, res) =>{
//     axios.get("http://localhost:5000/api/appointmentRequest", {params:{id:req.query.id}})
//         .then(function(appointmentRequestdata){
//             res.render("update_appointmentRequest", {appointmentRequest: appointmentRequestdata.data})
//         })
//     .catch(err =>{
//         res.send(err);
//     })

// }

// exports.view_appointmentRequest = (req, res) =>{
//     axios.get("http://localhost:5000/api/appointmentRequest", {params:{id:req.query.id}})
//         .then(function(appointmentRequestdata){
//             res.render("view_appointmentRequest", {appointmentRequest: appointmentRequestdata.data})
//         })
//     .catch(err =>{
//         res.send(err);
//     })
// }