import express from "express";
import DataModel from "../Model/DataModel.js";

const router = express.Router();

router.get("/get-data", async (req, res) => {
  try {
    const data = await DataModel.find({});
    res.status(200).send({
      success: true,
      messege: "Data get successfully.",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "Error while getting data",
      error,
    });
  }
});

export default router;
