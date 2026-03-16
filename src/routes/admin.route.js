import express from "express";
import { protectRoute, requireAdmin } from "../middlewares/authMiddleware.js";
import { getUserSubscriptions } from "../controllers/admin.controller.js";

const router = express.Router();

router.get(
  "/subscriptions/:id",
  protectRoute,
  requireAdmin,
  getUserSubscriptions,
);

export default router;
