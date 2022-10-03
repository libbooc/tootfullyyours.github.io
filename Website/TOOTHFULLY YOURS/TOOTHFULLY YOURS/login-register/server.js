const express = require("express")
const app = express()
const dotenv = require('dotenv');
const bodyparser = require("body-parser")
const path = require("path")
const session = require("express-session")
const {v4:uuidv4} = require("uuid")
const router = require("./server/route/router")
const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;


// mongodb connection
connectDB();

app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }))



app.set("view engine", 'ejs');

//load static assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.join(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized:  true
}));


app.use('/route', router)

//home route
app.get('/', (req, res) =>{
    res.render('_home-body',{title: "ToothFully Yours"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})