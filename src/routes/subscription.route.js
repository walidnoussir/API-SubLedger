import express from "express";
import {
  createSubscription,
  deleteSubscription,
  getSubscription,
  getSubscriptions,
  updateSubscripion,
} from "../controllers/subscription.controller.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  validateCreateSubscription,
  validateUpdateSubscription,
} from "../middlewares/subscription.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.post("/create", validateCreateSubscription, createSubscription);
router.get("/", getSubscriptions);
router.get("/:id", getSubscription);
router.delete("/delete/:id", deleteSubscription);
router.put("/update/:id", validateUpdateSubscription, updateSubscripion);

export default router;
