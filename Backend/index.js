import jwt from 'jsonwebtoken';
import cors from 'cors';
import bcrypt from 'bcryptjs'


import dotenv from "dotenv";
dotenv.config(); 

import connectDB from "./DBconnection/DbConnect.js";  
connectDB(); 

import express from "express";
import datas from "./Routes/DataRoutes.js";
import userLogin from "./Routes/UserRoutes.js";
import UserAuthenticate from "./Routes/UserAuthenticate.js";

const app = express();
app.use(express.json()); 
app.use(cors()); 

app.use("/login", userLogin);
app.use('/ShopSphere',UserAuthenticate);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The Server Is Listening on port ${PORT}`);
});
