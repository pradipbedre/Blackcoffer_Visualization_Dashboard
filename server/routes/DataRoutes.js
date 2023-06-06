import express from "express";
const router = express.Router();
import { getData } from "../controllers/DataControllers.js";

// Read one data
router.get("/", getData);

export default router;
