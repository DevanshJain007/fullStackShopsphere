import express from "express";  // Import correctly
import userAuth from '../Controller/UserAuthController.js'
import verifyMiddleware from "../Middleware/UserJwtAuthenticate.js";
const router = express.Router(); 

router.post("/RegisterUser",userAuth.register);
router.post("/Login",userAuth.login)
router.post("/Protected",verifyMiddleware.UserJwtAuthenticate,roleIDent,(req,res)=>{
    return res.json({ success: true, message: "This is a protected route", user: req.user });
})
router.post("/Logout",userAuth.logout)

export default router;