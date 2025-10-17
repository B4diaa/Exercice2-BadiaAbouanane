import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './src/routes/taskRoutes.js';
import bodyParser from 'body-parser';
import pool from '../Exercice2-BadiaAbouanane/src/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/tasks", taskRoutes);
app.use(bodyParser.json());

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur de connexion à la base :', err);
  } else {
    console.log('Connexion réussie ! Heure actuelle :', res.rows[0]);
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});