import {Request, Response} from "express";
import express from "express";
import { createEmployee, deleteEmployee, showEmployee } from "../controllers/employee/createController";

const router = express.Router();

router.get('/list', showEmployee)
router.post('/create', createEmployee)
router.delete('/delete/:_id', deleteEmployee )

export default router;