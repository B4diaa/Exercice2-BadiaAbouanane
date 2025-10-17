import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

const pool = new Pool({
  host : 'localhost',
  port : 5432,
  user : 'todolist',
  password : 'todolist',
  database : 'todolist'
});

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

export default pool;