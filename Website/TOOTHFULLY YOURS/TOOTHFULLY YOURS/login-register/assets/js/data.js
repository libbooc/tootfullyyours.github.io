import { MongoClient } from mongodb;
const mongoose = require('mongoose');
const con = await mongoose.connect(process.env.MONGO_URI);
        


MongoClient.connect(con, ()=>{
    console.log("connected")
} )