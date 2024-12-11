import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT);
  });
});
