import mongoose from "mongoose";
import dotenv from "dotenv";
import DataModel from "../Model/DataModel.js";
import data from "./Data.js";

dotenv.config();

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

//refresh all connections
const refreshAll = async () => {
  try {
    await DataModel.deleteMany({});
    await DataModel.insertMany(data);
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};
refreshAll();
