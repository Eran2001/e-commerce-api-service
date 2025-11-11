import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";

import userRegisterRoutes from "./routes/auth/register/userRegisterRoutes.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/auth", userRegisterRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
