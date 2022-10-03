var express = require("express");
var router = express.Router();

const credential = {
    email: "admin@gmail.com",
    password: "admin123"
}

//login user
router.post('/login',(req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user= req.body.email;
        res.redirect('/route/appointmentRequest_body');
        // res.end("Login Successful...!")
    }else{
        res.end("Invalid Username!")
    }
})

//route for appointmentRequest

router.get("/appointmentRequest_body", (req, res)=>{
    if(req.session.user){
        res.render("appointmentRequest_body",{user:req.session.user})
    }else{
        res.send("Unauthorize User!")
    }
})

//route for register

router.get("/register", (req, res)=>{
    res.render("register_body", {title: 'User Registration'})
})


//route for logout

router.get('/logout', (req, res) =>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send('Error')
        }else{
            res.render("login_body", {title: "Express", logout: "Logout Successfully"})
        }
    })
})

module.exports = router
