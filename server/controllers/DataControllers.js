import Data from "../models/Data.js";
import fs from "fs";

export const getData = async (req, res) => {
  try {
    const result = await Data.find();
    res.json(result);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

