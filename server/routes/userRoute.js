import express from 'express'
import { registerController,loginController } from '../controllers/userController.js';

const router = express.Router()

router.post("/register",registerController)
//LOGIN
router.post("/login",loginController)

export default router;