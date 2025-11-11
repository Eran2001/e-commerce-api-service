import express from "express";

import { registerUser } from "../../../controllers/authController.js";

import authenticateToken from "../../../middlewares/authMiddleware.js";

const userRegisterRoutes = express.Router();

userRegisterRoutes.get("/", authenticateToken, (req, res) => {
  res.send("Register endpoint active.");
});

userRegisterRoutes.post("/users", registerUser);

export default userRegisterRoutes;
