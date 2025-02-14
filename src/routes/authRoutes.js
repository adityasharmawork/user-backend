import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { validate, registerSchema, loginSchema } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

export default router;
