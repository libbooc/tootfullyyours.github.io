// Check

var appointmentRequestdb = require('../model/model')

// create and save new appointmentRequest
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const appointmentRequest = new appointmentRequestdb({
        p_name: req.body.p_name,
        p_email: req.body.p_email,
        p_phoneNum: req.body.p_phoneNum,
        p_message: req.body.p_message

     
    })

    // save appointmentRequest in the database

    appointmentRequest
        .save(appointmentRequest)
        .then(data =>{
            // res.send(data)
            res.redirect("/add-appointmentRequest");
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });


}
// retrieve and return all histories/ retreive and return a single appointmentRequest
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        appointmentRequestdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found appointmentRequest with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving appointmentRequest with id" + id})
        })

    }else{
        appointmentRequestdb.find()
        .then(appointmentRequest=>{
            res.send(appointmentRequest)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving appointmentRequest information"})
        })
    }

  
}

 // Update a new idetified appointmentRequest by appointmentRequest id
// exports.update = (req,res)=>{
//     if(!req.body){
//         return res
//             .status(400)
//             .send({message:"Data to update can not be empty"})
            
//     }

//     const id = req.params.id;
//     appointmentRequestdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
//         .then(data =>{
//             if(!data){
//                 res.status(404).send({message: `Cannot Update appointmentRequest with ${id}. Maybe appointmentRequest not found!`})
//             }else{
//                 res.send(data)
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({message: "Error Update appointmentRequest information"})
//         })
    
// }

// // Delete a appointmentRequest with specified appointmentRequest id in the request

exports.delete = (req,res)=>{
    const id = req.params.id;
    appointmentRequestdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "appointmentRequest was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete appointmentRequest with id=" + id
            });
        });
}
