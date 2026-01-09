import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import employee from "./routes/employee.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
dotenv.config();

//connect mongoDB
connectDB();

app.use("/api", employee);

app.get("/", (req, res) => {
  res.send("hello from restAPI backend");
});

app.listen(PORT, (req, res) => {
  console.log(`server started and running on ${PORT}`);
});
