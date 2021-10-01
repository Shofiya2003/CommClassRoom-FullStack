//Import Express JS library
const express=require('express');
//Create a router app
const app=express.Router();

//Import routes
const auth=require('./api/auth');
//Create a get request handler for /

app.get('/',(req,res)=>{
    res.send("Welcome to Community classroom api");
});

 //Create Handlers
 app.use('/auth',auth);

//Export the router
module.exports=app;