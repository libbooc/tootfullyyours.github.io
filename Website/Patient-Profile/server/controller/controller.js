// Check

var PatientProfiledb = require('../model/model')

// create and save new patientProfile
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const patientProfile = new PatientProfiledb({
        // p_name: req.body.p_name,
        // p_email: req.body.p_email,
        // p_phoneNum: req.body. p_phoneNum,
        p_birthDate: req.body.p_birthDate,
        p_age: req.body.p_age,
        p_gender: req.body.p_gender,
        p_nationality: req.body.p_nationality,
        p_homeAddress: req.body.p_homeAddress,
        p_ECFullname: req.body.p_ECFullname,
        p_ECNumber: req.body.p_ECNumber,
        p_ECRelationship: req.body.p_ECRelationship
   
    })

    // save patientProfile in the database

    patientProfile
        .save(patientProfile)
        .then(data =>{
            // res.send(data)
            res.redirect("/patientProfile");
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });


}
// retrieve and return all histories/ retreive and return a single patientProfile
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        PatientProfiledb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found patientProfile with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving patientProfile with id" + id})
        })

    }else{
        PatientProfiledb.find()
        .then(patientProfile=>{
            res.send(patientProfile)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving patientProfile information"})
        })
    }

  
}

 // Update a new idetified patientProfile by patientProfile id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
            
    }

    const id = req.params.id;
    PatientProfiledb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Update patientProfile with ${id}. Maybe patientProfile not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "Error Update patientProfile information"})
        })
    
}

