import db from "../db/mongodb.js";
import express from "express";
import { ObjectId } from "mongodb";

const router = express.Router();

if (!db) {
  throw new Error("Error connecting to Flare database");
}

// Get user by id
router.get("/:id", async (req, res) => {
  const collection = db.collection("users");
  const query = { _id: new ObjectId(req.params.id) };
  const data = await collection.findOne(query);

  try {
    !data ? res.send("User not found").status(404) : res.send(data).status(200);
  } catch (error) {
    res.status(500).send("Error getting user: ", error);
  }
});

// Create and add new user
router.post("/", async (req, res) => {
  const collection = db.collection("users");

  try {
    let document = {
      name: req.body.name,
      age: req.body.age,
    };
    const data = await collection.insertOne(document);

    res.send(data).status(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding user: ", error);
  }
});

export default router;
