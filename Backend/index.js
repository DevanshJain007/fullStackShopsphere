import express from "express";

import datas from "./Routes/DataRoutes.js";
import userLogin from "./Routes/UserRoutes.js";
import loginMiddleware from "./Middleware/LoginMiddleware.js";
const app = express();

app.use("/data", datas);
app.use("/login", userLogin);
const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log("The Server Is Listening");
});
