import mongoose, { Types } from "mongoose";

const requestSchema = new mongoose.Schema({

    status:{
        type:String,
        default:"pending",
        enum:['pending','accepted','rejected']
    },
   
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
    },
    reciever:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
    }

},{
    timestamps:true,
})

const Request = mongoose.model("message",requestSchema);

module.exports=Request;