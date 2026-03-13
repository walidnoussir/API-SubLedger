import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { userProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", protectRoute, userProfile);

export default router;
