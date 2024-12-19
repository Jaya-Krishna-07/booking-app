import express from 'express';
import cors from "cors";
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users.ts';
import authRoutes from './routes/auth.ts';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("MongoDB connection established!"))
  .catch((err) => console.error("MongoDB connection error!", err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("server is running on localhost:3000");
});
