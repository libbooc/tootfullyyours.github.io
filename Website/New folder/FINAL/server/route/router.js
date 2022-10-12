
const express = require('express');
const router = express.Router()
const controller = require("../controller/controller");


const credential = {
    email: "admin@gmail.com",
    password: "admin123"
}

//Go to login page
router.get("/login", (req, res)=>{
    res.render("login_body", {title: 'Log-in'})
})


// Register


router.post('/register', controller.create);


// login user
router.post('/login',(req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user= req.body.email;
        res.redirect('/route/appointmentRequest_body');

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


//route for about us

router.get('/about-us', (req, res) =>{
    res.render("about-us_body",{title: "About Us"})
})

router.get('/about-us-no-account', (req, res) =>{
    res.render("about-us-no-account_body",{title: "About Us"})
})


module.exports = router
