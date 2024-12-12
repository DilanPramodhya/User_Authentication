import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // Allow us to parse incoming requests: req.body
app.use(cookieParser()); // Allow us to parse incoming cookies:

app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT);
  });
});
