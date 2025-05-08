import express from "express";
import { login, logOut, profile, registerUser, verifyUser } from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/register", registerUser)
router.get("/verify:token", verifyUser)
router.post("/login", login)
router.get("/me", isLoggedIn, profile)
router.get("/logout", isLoggedIn, logOut)

export default router;