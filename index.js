const express = require('express');
const app = express();

const port = 8000;

//Use express router
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        // console.log("Error",err);
        //Interpolation
        console.log(`Error in running the server : ${err}`);
    }
    else{
        console.log(`Server is up and running at port ${port}`);
    }
})