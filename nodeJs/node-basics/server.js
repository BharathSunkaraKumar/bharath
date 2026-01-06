import express from "express";
import { logger } from "./middleware/logger.js";
import { auth } from "./middleware/auth.js";
import useRoutes from "./routes/user.routes.js"
import connectDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 8000;

connectDB()
app.use("/users", useRoutes)


// app.use(logger);

app.get("/", (req, res) => {
  res.send("hello from express");
});
app.get("/about", (req, res) => {
  res.send("this is about page")
})
app.get("/contact", (req, res) => {
  res.json({message: "Hello API"})
})

// app.use("/admin", auth, (req, res) => {
//   res.send("this is admin page")
// })

app.listen(port, () => {
  console.log(`Server running on post ${port}`);
});