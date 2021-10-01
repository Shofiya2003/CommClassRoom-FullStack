//Import Express JS library
const express=require('express');
//Create a router app
const app=express.Router();


//Import Routes
const api=require('./api');

//Create a get request handler for /

app.get('/',(req,res)=>{
    res.send("Welcome to Community classroom");
})

//Creating handler for api route
app.use('/api',api);

//Export the router
module.exports=app;