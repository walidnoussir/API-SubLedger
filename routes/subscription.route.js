import express from "express";
import {
  createSubscription,
  deleteSubscription,
  getSubscription,
  getSubscriptions,
  updateSubscripion,
} from "../controllers/subscription.controller.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/create", createSubscription);
router.get("/", getSubscriptions);
router.get("/:id", getSubscription);
router.delete("/delete/:id", deleteSubscription);
router.put("/update/:id", updateSubscripion);
