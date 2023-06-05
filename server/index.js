import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dataRoutes from "./routes/Data_routes.js";
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

app.listen(port, () => {
  connect();
  console.log("server is live.......");
});
