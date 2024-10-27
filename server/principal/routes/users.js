import db from "../db/mongodb.js";
import express from "express";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const collection = db.collection("users");
  const data = await collection.find({}).toArray();

  res.send(data).status(200);
});

// router.get("/:id", async (req, res) => {
//   const collection = db.collection("users");
//   const query = { _id: new ObjectId(req.params.id) };
//   const data = await collection.findOne(query);

//   !result ? res.send("User not found").status(404) : res.send(data).status(200);
// });

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
