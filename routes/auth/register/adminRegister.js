import express from "express";

import { registerAdmin } from "@controllers/adminAuthController.js";

const router = express.Router();

router.post("/auth/register", registerAdmin);

export default router;
