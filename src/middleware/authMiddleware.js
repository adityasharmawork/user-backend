import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const secret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    try {
      token = req.headers.authorization;
      const decoded = jwt.verify(token, secret);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ 
        message: "Unauthorized, invalid token" 
      });
    }
  } else {
    res.status(401).json({ 
      message: "No token, authorization denied" 
    });
  }
};

export default authMiddleware;
