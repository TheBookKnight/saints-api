import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// Connects to Mongo database
const connectionString = process.env.ATLAS_URI || "";
console.log("connection:", connectionString)
const client = new MongoClient(connectionString);
let conn;
try {
    conn = await client.connect();
} catch (error) {
    console.error(error);
}

// connects to api database
let db = conn.db("api");
export default db;