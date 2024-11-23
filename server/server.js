const express = require('express');
require('dotenv').config();

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to my backend server");
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port:${process.env.PORT}`);
})