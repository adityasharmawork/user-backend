import { z } from "zod";

// Schema for user registration
export const registerSchema = z.object({
  body: z.object({
    username: z.string().min(5, "Username must be at least 5 characters long"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    fullName: z.string().min(5, "Full name must be at least 5 characters long"),
    gender: z.enum(["Male", "Female", "Other"], "Invalid gender input"),
    dob: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    country: z.string().min(4, "Country name must be at least 4 characters long"),
  }),
});

// Schema for user login
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  }),
});

// Middleware function for validating requests
export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({ body: req.body });
    next();
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};
