import express from "express";

import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json());

app.listen(4000);

app.use(indexRoutes);
app.use('/api',employeesRoutes);


console.log('server running port 4000');



