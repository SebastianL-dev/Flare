import { MongoClient, ServerApiVersion } from "mongodb";

process.loadEnvFile(".env.local");
const uri = process.env.MONGODB_URI;

// Create client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  },
});

// Catch error on invalid uri
if (!process.env.MONGODB_URI) {
  throw new Error("Please set a MONGODB_URI enviroment variable");
}

// Connect client to mongodb
try {
  await client.connect();
} catch (error) {
  console.error("Error connecting to MongoDB: ", error);
}

let db = client.db("flare");

export default db;
