import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let db;

export async function connectToMongo() {
  if (!db) {
    await client.connect();
    db = client.db(process.env.MONGO_DB_NAME || 'exercice2');
    console.log('Connecté à MongoDB');
  }
  return db;
}

export async function getMongoCollection(collectionName) {
  const database = await connectToMongo();
  return database.collection(collectionName);
}

 



