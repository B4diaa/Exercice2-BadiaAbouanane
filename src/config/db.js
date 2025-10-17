import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host : process.env.PGHOST,
  port : process.env.PGPORT,
  user : process.env.PGUSER,
  password : process.env.PGPASSWORD,
  database : process.env.PGDATABASE
});

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

export default pool;