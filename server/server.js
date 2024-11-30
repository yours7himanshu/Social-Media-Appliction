import express from 'express'
import { configDotenv } from 'dotenv';

const app = express();
configDotenv();

// testing my backend server
app.get('/',(req,res)=>{
    res.send("Hello welcome to my backend webstie")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port:${process.env.PORT}`)
})