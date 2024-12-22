import express from "express";
import { login } from "../controllers/loginController";
import { register } from "../controllers/registerController";
const router = express.Router()

// register
router.post('/register', register)
// login user
router.post('/login', login);
export default router;
