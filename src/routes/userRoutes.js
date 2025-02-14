import express from "express";
import { getUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:query", authMiddleware, getUser);

export default router;
