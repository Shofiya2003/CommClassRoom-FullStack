//Import Express JS library
const express=require('express');
const { checkUserNameAndPassword } = require('../../helpers/Users');
//Create a router app
const app=express.Router();

let curentUser=null;


//Endpoint to check whether the current use ris logged in or not.
app.get('/login',(req,res)=>{
    if(curentUser){
        res.json(curentUser);
    }else{
        res.status(400).json({
            "Error":"Not logged In"
        });
    }
});

//Endpoint to check to login in a user
app.post('/login',(req,res)=>{
    const {UserName,Password}=req.body;

    if(!UserName || !Password){
        res.status(400).json({
            Error:"Both the fields are mandatory"
        });
    }
    else if(typeof UserName!=="string" && typeof Password!=="string"){
        res.status(400).json({
            Error:"Both username and password are mandatory"
        });
    }
    else{
        switch (checkUserNameAndPassword(UserName,Password)){
            case 0:
                res.status(404).json({
                    "Error":"User not found"
                });
                curentUser=null;
                break;
            
            case -1:
                res.status(400).json({
                    "Error":"Invalid Password or Username"
                });
                curentUser=null;
                break;
            default:
                curentUser=checkUserNameAndPassword(UserName,Password);
                res.json(curentUser);
        }
    }


    
});

//Endpoint to logout a user
app.post('/logout',(req,res)=>{
    curentUser=null;
    res.status(204).json({Message:"User Logged out Successfully"});
})



//Export the router
module.exports=app;