import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './src/routes/taskRoutes.js';
import bodyParser from 'body-parser';
import pool from '../Exercice2-BadiaAbouanane/src/config/db.js';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import User from './src/models/userModel.js';

const swaggerDocument = JSON.parse(fs.readFileSync('./src/swagger.json', 'utf-8'));
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/testDB")
    .then(() => {
        app.listen(PORT, () => {
                console.log(`Server is listening on port ${PORT}`);
            });
    })
    .catch(
        (err) => {
            console.log("MongoDB connection error: ", err);
        }
    );


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/tasks", taskRoutes);
app.use(bodyParser.json());

dotenv.config();

// Handling post request
app.post("/login",
    async (req, res, next) => {
        let { email, password } = req.body;
 
        let existingUser;
        try {
            existingUser =
                await User.findOne({ email: email });
        } catch {
            const error =
                new Error(
                    "Error! Something went wrong."
                );
            return next(error);
        }
        if (!existingUser
            || existingUser.password
            != password) {
            const error =
                Error(
                    "Wrong details please check at once"
                );
            return next(error);
        }
        let token;
        try {
            //Creating jwt token
            token = jwt.sign(
                {
                    userId: existingUser.id,
                    email: existingUser.email
                },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            const error =
                new Error("Error! Something went wrong.");
            return next(error);
        }
 
        res
            .status(200)
            .json({
                success: true,
                data: {
                    userId: existingUser.id,
                    email: existingUser.email,
                    token: token,
                },
            });
    });
 
// Handling post request
app.post("/register",
    async (req, res, next) => {
        const {
            name,
            email,
            password
        } = req.body;
        const newUser =
            new User({
                name,
                email,
                password,
            });
 
        try {
            await newUser.save();
        } catch (err){
            console.error("Error MongoDB lors de l'enregistrement:", err);
            const error = new Error ("Error! Something went wrong.");
            return next(error);
        }
        let token;
        try {
            token = jwt.sign(
                {
                    userId: newUser.id,
                    email: newUser.email
                },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );
        } catch (err) {
            const error =
                new Error("Error! Something went wrong.");
            return next(error);
        }
        res
            .status(201)
            .json({
                success: true,
                data: {
                    userId: newUser.id,
                    email: newUser.email,
                    token: token
                },
            });
    });



pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur de connexion à la base :', err);
  } else {
    console.log('Connexion réussie ! Heure actuelle :', res.rows[0]);
  }
});

