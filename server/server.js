//Import Express JS framework
const express = require("express");
//Creating an app instance of express
const app=express();

//Configure a port
const port=3000;

//Import routes
const root=require('./routes/root');

//Use custom middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//Use middleware-- Route handler
app.use('/',root);



//Listen to a port
app.listen(3000,()=>{
    console.log(`Server started on port ${port}`);
})