import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from jwt server");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
