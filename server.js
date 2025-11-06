import express from 'express';
import dotenv from 'dotenv';
import taskRoutesPg from './src/routes/taskRoutesPg.js';
import taskRoutesMongo from './src/routes/taskRoutesMongo.js';
import bodyParser from 'body-parser';
import pool from '../Exercice2-BadiaAbouanane/src/config/db.js';
import swaggerDocument from './src/docs/swagger.json';
import swaggerUi from 'swagger-ui-express';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/tasks", taskRoutesPg);
app.use("/api/tasks-mongo", taskRoutesMongo);
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

