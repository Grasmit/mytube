import express from "express";
import { signin, signup } from "../controllers/auth.js"

const router = express.Router()

//create a user
router.post("/signup",signup)

router.post("/signin",signin)

router.post("/google")

export default router

