import express from "express";
import DataController from "../Controller/ExpresssDataController.js";
// import middleware from '../Middleware/UserMiddleware.js'

const router = express.Router();

// router.route("/express").get(DataController.expressDatas).post()

router.get("/express", DataController.expressDatas);

router.get("/expressData/:id", DataController.expressDataId);

router.get("/expressData/delete/:id", DataController.expressDataDeleteId);


export default router;
