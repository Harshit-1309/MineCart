import express from "express";
import dotenv from "dotenv";
import { config } from "dotenv";

import connectDB from "./db.js";

config();

//database connection
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

//rest api
app.get("/", (req, res) => {
  res.send("<h1> Welcome to Ecommerce app </h1>");
});

app.listen(PORT, () => {
  console.log(`Succesfully Running at PORT ${PORT}`);
});
