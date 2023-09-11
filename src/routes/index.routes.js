import { Router } from "express";
import { pool } from "../db.js";
import { getPong } from "../controllers/index.controller.js";

const router = Router();

router.get('/ping', getPong);

 export default router;
