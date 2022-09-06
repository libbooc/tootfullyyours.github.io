// Check

var Appointdb = require('../model/model')

// create and save new appointment
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // new appointment
    // function format(adate) {
    //     var dt = new Date(adate);
    //     if (!isNaN(dt.getTime())) {
    //         return dt.getMonth() + 1 + '/' + dt.getDate() + '/' + dt.getFullYear();
    //     }
    // }

function timeConvert (atime) {
        atime = atime.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [atime];
      
        if (atime.length > 1) { 
          atime = atime.slice (1);  
          atime[5] = +atime[0] < 12 ? 'AM' : 'PM'; 
          atime[0] = +atime[0] % 12 || 12; 
        }
        return atime.join (''); 
      }

    const appoint = new Appointdb({
        pID: req.body.pID,
        aID: req.body.aID,
        fname: req.body.fname,
        lname: req.body.lname,
        mname: req.body.mname,
        adate: req.body.adate,
        atime: timeConvert(req.body.atime),
        procedure: req.body.procedure,
        p_cnum: req.body.p_cnum
    })

    // save appointment in the database

    appoint
        .save(appoint)
        .then(data =>{
            // res.send(data)
            res.redirect("/add-appointment");
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });


}
// retrieve and return all appointments/ retreive and return a single appointment
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        Appointdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found appointment with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving appointment with id" + id})
        })

    }else{
        Appointdb.find()
        .then(appoint=>{
            res.send(appoint)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving appointment information"})
        })
    }

  
}

 // Update a new idetified appointment by appointment id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
            
    }

    const id = req.params.id;
    Appointdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Update appointment with ${id}. Maybe appointment not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "Error Update appointment information"})
        })
    
}

// // Delete a appointment with specified appointment id in the request

exports.delete = (req,res)=>{
    const id = req.params.id;
    Appointdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "Appointment was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Appointment with id=" + id
            });
        });
}
