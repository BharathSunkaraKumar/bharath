import express from "express";
import {
  createEmployee,
  getEmployee,
  singleEmployee,
} from "../controllers/employee.Controller.js";
const router = express.Router();

router.post("/add-emp", createEmployee);
router.get("/all-emp", getEmployee);
router.get("/emp/:id", singleEmployee);

export default router;
