import userModel from '../DatabaseModels/userModels.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET||'mountainDew';
console.log(JWT_SECRET);//to know what is the stored in it and i have used for debug by the one way to do is that use or operation 
 

const register = async (req, res) => {
    console.log("Checking userModel:", userModel); // Debugging step
    console.log(JWT_SECRET);//to know what is the stored in it and i have used for debug by the one way to do is that use or operation 

    if (!userModel) {
        return res.json({ success: false, message: "userModel is not defined!" });
    }

    const { name, email, password } = req.body;
    
    
    if (!name || !email || !password) {
        return res.json({ success: false, message: "Missing Details" });
    }
    //let see how we gonna do that the find if already register and it is inside in database 
    const existingUser=await userModel.findOne({email});
    // console.log(existingUser);
    
    if(existingUser){
        return res.send({success:false,message:"User Email is Already Register Use Diffrent Email"})
    }
    try {
        const bcryptPassword=await bcrypt.hash(password,10);
        console.log(bcryptPassword);
        
        const user = new userModel({ name, email, password:bcryptPassword });
        console.log("User instance:", user); // Debugging step
        await user.save();
        res.json({ success: true, message: "User Registered Successfully" });

    } catch (error) {
        res.json({ success: false, message: `${error.message}` });
    }
};

const login =async(req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    if(!email||!password){
     return   res.json({sucess:false,message:"Buddy email aur password to do"})
    }
    try {
        const user=await userModel.findOne({email})
        if(!user){
          return  res.json({sucess:true,message:"User Not Found Register/SignIn first"})
        }
        const passMatch=await bcrypt.compare(password,user.password);
        if (!passMatch) {
            return res.json({succes:failed,message:'Wrong Password h encrypted s check kiya h'})
        }
        const token =jwt.sign({id:user._id,email:user.email},JWT_SECRET,{expiresIn:'1h'})
        console.log(token);
        
        return res.json({ success: true, message: 'Welcome Buddyyyy' ,token});
    } catch (error) {
        return res.json({success:false,message:`${error.message}`})
    }
}

const logout=async(req,res)=>{
    return res.json({success:true,message:"Succesfully Logout "})
}
export default { register,login,logout };
