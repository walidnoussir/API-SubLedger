import express from "express";
import { login, signUp } from "../controllers/auth.controller.js";
import { protectRoute, validateRole } from "../middlewares/authMiddleware.js";
import {
  validateLogin,
  validateSignUp,
} from "../middlewares/validateMiddleware.js";

const router = express.Router();

router.post("/signUp", validateSignUp, validateRole, signUp);
router.post("/login", validateLogin, login);
router.get("/", protectRoute, (req, res) => {
  res.json({ message: "hello admin" });
});

export default router;
