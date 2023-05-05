import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";

dotenv.config();
const port = process.env.PORT || 4100;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
