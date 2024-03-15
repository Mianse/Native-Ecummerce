import express from 'express'
import { registerController,loginController ,getUserProfileController,logoutController} from '../controllers/userController.js';
import  {isAuth} from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post("/register",registerController)
//LOGIN
router.post("/login",loginController)

//getuser router
router.get("/profile",isAuth,getUserProfileController)

//logout
router.get("/logout",isAuth,logoutController)

export default router;