import express from "express";
import router from  './routes/employeeRoute';
import dB from "./database/employee";
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
dB();

app.use('/employee', router);

app.listen(5000, () =>{
    console.log('server running!')
})

