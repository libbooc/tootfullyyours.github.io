var NewUserdb = require('../model/model')

// create and save new appointmentRequest
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const User = new NewUserdb({
        p_username: req.body.p_username,
        p_email: req.body.p_email,
        p_password: req.body.p_password,
        p_cpassword: req.body.p_cpassword,

     
    })

    // save appointmentRequest in the database

    User
        .save(User)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });


}