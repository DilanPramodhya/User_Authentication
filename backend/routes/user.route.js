import express from "express";
import {
  checkAuth,
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/checkAuth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verifyEmail", verifyEmail);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword/:token", resetPassword);

export default router;
