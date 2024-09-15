import express from "express";
import db from "../db/conn.js"
import { ObjectId } from "mongodb";

const router = express.Router();

// GET a single saint's data by `id`
router.get("/:id", async (req, res) => {
    let collection = await db.collection("saints");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})

export default router;