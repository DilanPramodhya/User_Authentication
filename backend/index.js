import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/connectDB.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  connectDB();
  console.log("Server listening on PORT 3000");
});
