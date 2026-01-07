import express from "express";
import { registerUser } from "../controllers/singnup.controller.js";
import { loginUser } from "../controllers/login.controller.js";
const router = express.Router();

router.post("/signup", registerUser);

router.post("/login", loginUser);

export default router;
