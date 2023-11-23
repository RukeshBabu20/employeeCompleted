import { Request, Response } from "express";
import employeeModel from "../../models/employeeModel";


export const createEmployee = async (req: Request, res: Response) =>  {
    try{
        const { employeeName, employeeDepartment, employeeSalary } = req.body;

        if(!employeeName || !employeeDepartment || !employeeSalary){
            return res.send("data invalid");
        }

        const employee = new employeeModel({
            employeeName, employeeDepartment, employeeSalary
        })

        const saveEmployee = await employee.save();
        res.status(200).json(saveEmployee);
    }
    catch(error) {
        console.log(error);
    }
    
}

export const deleteEmployee = async (req: Request, res: Response) => {
    
    try{
        const { _id } = req.params;
        console.log(_id,123);
        
        const employee = await employeeModel.findByIdAndDelete(_id);

        if(!employee){
            return res.status(400).json({error: 'Employee Not Found..!'})
        }

        res.status(200).json(employee);

    }catch(error){
        console.log(error);
    }
}

export const showEmployee = async (req:Request, res: Response) => {
    try{
    const employee = await employeeModel.find();
    res.json(employee);
    }
    catch(error){
        console.log(error);
    }
}
