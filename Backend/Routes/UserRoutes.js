import express from "express";
import controller from "../Controller/UserController.js";
import loginMiddleware from "../Middleware/LoginMiddleware.js";
const router = express.Router();

router.get("/:id",loginMiddleware , controller.loginss);

export default router;
