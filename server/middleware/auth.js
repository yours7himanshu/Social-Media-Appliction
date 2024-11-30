
import jwt from 'jsonwebtoken';
const isAuthenticated = async(req,res,next)=>{
    try{

        const token = await req.cookies['token'];
        if(!token){
            return res.status(401).json({
                success:false,
                message:"You are unauthorised...Please login"
            })
        }

        const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decodedData);
        
    }
    catch(err){
    console.log('error',err);
    }
   next();
}

export default isAuthenticated;