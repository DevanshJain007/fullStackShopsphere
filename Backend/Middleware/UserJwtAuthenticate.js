import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'mysecretkey';

const UserJwtAuthenticate=async(req,res,next)=>{

    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.json({success:false,message:"Token is Not Present "})
    }
    try {
        const decode=jwt.verify(token,JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        return res.json({success:failed,message:`${error}= due to this `})
    }
}
export default {UserJwtAuthenticate}