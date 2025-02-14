import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


export const registerUser = async (req, res) => {
  const { username, email, password, fullName, gender, dob, country } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ 
      message: "User already exists" 
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      fullName,
      gender,
      dob,
      country,
    });

    if (user) {
      res.json({ 
        message: "User registered successfully" 
      });
    } else {
      res.status(400).json({ 
        message: "Invalid user data" 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};



export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        gender: user.gender,
        dob: user.dob,
        country: user.country,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ 
        message: "Invalid email or password" 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};
