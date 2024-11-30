import mongoose from "mongoose";

const connectDB = async(req,res)=>{
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Successfully connected");
    }
    catch(error){
        console.log("Error connecting to the database");
        return  res.status(500).json({
            success:false,
            message:"Error connecting to the database"
        })
    }
}
export default connectDB;