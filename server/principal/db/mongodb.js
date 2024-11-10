import { MongoClient, ServerApiVersion } from "mongodb";

process.loadEnvFile(".env.local");
const uri = process.env.MONGODB_URI;

// Create client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Catch error on invalid uri
if (!process.env.MONGODB_URI) {
  throw new Error("Please set a MONGODB_URI enviroment variable");
}

// Connect client to mongodb
try {
  await client.connect();
  console.log("Successfully connected to Flare database");
} catch (error) {
  console.error("Error connecting to Flare database: ", error);
}

let db = client.db("flare");

export default db;
