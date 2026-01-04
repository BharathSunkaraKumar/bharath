import express from "express";
import { logger } from "./middleware/logger.js";
import { auth } from "./middleware/auth.js";
const app = express();



app.use(logger);

app.get("/", (req, res) => {
  res.send("hello from express");
});
app.get("/about", (req, res) => {
  res.send("this is about page")
})
app.get("/contact", (req, res) => {
  res.json({message: "Hello API"})
})

app.use("/admin", auth, (req, res) => {
  res.send("this is admin page")
})

app.listen(3000, () => {
  console.log("Server running on post 3000");
});