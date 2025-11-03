import express from "express";

import { registerUser } from "../../../controllers/authController.js";

const userRegisterRoutes = express.Router();

userRegisterRoutes.get("/", (req, res) => {
  res.send("Register endpoint active.");
});

userRegisterRoutes.post("/users", registerUser);

export default userRegisterRoutes;
