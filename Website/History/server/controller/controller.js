// Check

var Historydb = require('../model/model')

// create and save new history
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const history = new Historydb({
        transNo: req.body.transNo,
        phdate: req.body.phdate,
        toothNo: req.body.toothNo,
        procedure: req.body.procedure,
        payments: req.body.payments
    })

    // save patient history in the database

    history
        .save(history)
        .then(data =>{
            // res.send(data)
            res.redirect("/add-history");
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });


}
// retrieve and return all patient histories/ retreive and return a single patient history
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        Historydb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found patient history with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving patient history with id" + id})
        })

    }else{
        Historydb.find()
        .then(history=>{
            res.send(history)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving patient history information"})
        })
    }

  
}

 // Update a new idetified patient history by patient history id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
            
    }

    const id = req.params.id;
    Historydb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Update patient history with ${id}. Maybe patient history not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "Error Update patient history information"})
        })
    
}

// // Delete a patient history with specified patient history id in the request

exports.delete = (req,res)=>{
    const id = req.params.id;
    Historydb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "Patient history was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete patient history with id=" + id
            });
        });
}
