import express from 'express';
import cors from "cors";
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users.ts';
import authRoutes from './routes/auth.ts';
import myHotelRoutes from './routes/my-hotels.ts';
import hotelRoutes from './routes/hotels.ts';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("MongoDB connection established!"))
  .catch((err) => console.error("MongoDB connection error!", err));

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);
app.use("/api/hotels", hotelRoutes);

app.listen(3000, () => {
  console.log("server is running on localhost:3000");
});
