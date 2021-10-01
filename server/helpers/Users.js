const Users=require('../Constants/users.json');

const checkUserNameAndPassword=(userName,Password)=>{
    if(typeof Users[userName]!=='undefined'){
        
        if(Users[userName].Password===Password){
            //Correct name and Password
            return Users[userName];
        }else{
            //Wrong name and password
            return -1;
        }
    } else{
        //User does not exist
        return 0;
    }
}



module.exports={checkUserNameAndPassword};