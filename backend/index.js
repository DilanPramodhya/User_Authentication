import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/user.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server listening on PORT: ", PORT);
});
