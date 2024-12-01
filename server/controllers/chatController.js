
import { emitEvent } from '../utils/features.js';
import { ALERT, REFETCH_CHATS } from '../constants/events.js';

import Chat from '../models/chatModels.js'


const newGroupChat = async(req,res)=>{

    const {name,members}=req.body;

    if(members.length<2){
        return res.status(400).json({
            success:false,
            message:"Group chat must have atleast 3 memebers"
        })
    }
    const allMembers = [...members,req.users];
    await Chat.create({
        name,
        groupChat:true,
        creator:req.user,
        members:allMembers,
    });

    emitEvent(req,ALERT,allMembers,`Welcome to ${name} Group`);
    emitEvent(req,REFETCH_CHATS,members);

    return res.status(201).json({
        success:true,
        message:"Group Successfully created"
    })
}



export{newGroupChat}