import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'vadick22',
    port: 33060,
    database: 'companydb'
})

