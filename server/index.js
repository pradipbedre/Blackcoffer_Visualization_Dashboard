import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dataRoutes from "./routes/DataRoutes.js";
import fs from "fs";
import DataModel from "./models/Data.js";
const port = process.env.PORT || 4000;

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.get("/", (req, res) => {
  return res.send(`you are live on ${port}`);
});

app.use("/api/data", dataRoutes);


// Logic to insert jsondata.json file into mongodb atlas 

/* fs.readFile("jsondata.json", "utf8", async (err, data) => {
  if (err) {
    console.error("Failed to read data from file", err);
    return;
  }

  const jsonData = JSON.parse(data);

  try {
    // Insert data into the database
    await DataModel.insertMany(jsonData);
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Failed to insert data into the database", err);
  }
}); */

app.listen(port, () => {
  connect();
  console.log("server is live.......");
});
