import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

export async function connectToMongo() {
    try {
        await client.connect();
        console.log('✅ Connecté à MongoDB');
        return client.db('todolist');
    } catch (err) {
        console.error('❌ Erreur de connexion MongoDB :', err);
        throw err;
    }
}
