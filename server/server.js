import express, { urlencoded } from 'express'
import { configDotenv } from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import chatRouter from './routes/chatRoutes.js';
import { createUser } from './seeders/user.js';

const app = express();
configDotenv();

// connecting to the databse
connectDB();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));



// for apis
app.use('/users',userRoutes);
app.use('/api/v2',chatRouter);


// testing my backend server
app.get('/',(req,res)=>{
    res.send("Hello welcome to my backend website")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port:${process.env.PORT}`)
})