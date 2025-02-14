import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const response = await mongoose.connect(mongo_uri);
    console.log(`MongoDB Connected: ${response.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
