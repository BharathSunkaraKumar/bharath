import express from "express";
import {
  createEmployee,
  deleteEmpolyee,
  getEmployee,
  singleEmployee,
  updateEmployee,
} from "../controllers/employee.Controller.js";
const router = express.Router();

router.post("/add-emp", createEmployee);
router.get("/all-emp", getEmployee);
router.get("/emp/:id", singleEmployee);
router.put("/upd/:id", updateEmployee);
router.delete("/del/:id", deleteEmpolyee);

export default router;
