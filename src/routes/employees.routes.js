import { Router } from "express";
import { getEmployees, createEmployees, deleteEmployees, updateEmployees } from "../controllers/employees.controller.js";

const router = Router();


router.get('/employees', getEmployees) 
router.post('/employees', createEmployees) 
router.put('/employees', updateEmployees) 
router.delete('/employees', deleteEmployees) 

export default router;

