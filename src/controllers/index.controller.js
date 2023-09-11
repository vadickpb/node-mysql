import { pool } from '../db.js'


export const getPong = async (req, res) => {
    const [result] = await pool.query('SELECT "pong" as result');
    res.json(result);
}