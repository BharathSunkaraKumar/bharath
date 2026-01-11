import express from "express";
import { allUsers, createUser, login } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/", allUsers);
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome",
    id: req.id,
  });
  console.log(req.id);
});

export default router;
