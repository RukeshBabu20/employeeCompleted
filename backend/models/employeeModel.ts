import mongoose from "mongoose";
import { IEmplooyee } from "../types/employeeTypes";

const employeeSchema = new mongoose.Schema({
    employeeName:{
        type: String,
        required: true
    },
    employeeDepartment: {
        type: String,
        required: true
    },
    employeeSalary:{
        type: Number,
        required: true
    }
})

const employeeModel = mongoose.model<IEmplooyee>('employee', employeeSchema);

export default employeeModel;
