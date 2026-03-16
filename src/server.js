import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route.js";
import subscriptionsRoutes from "./routes/subscription.route.js";
import adminRoutes from "./routes/admin.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/subscriptions", subscriptionsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

const MONGODB_URL = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server running on ${port}`);
  try {
    let conn = await mongoose.connect(MONGODB_URL);
    console.log(`mongodb connected  : ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection error:", error);
  }
});
