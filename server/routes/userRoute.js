import express from 'express'
import { registerController,loginController ,getUserProfileController,logoutController,updateUserProfileController,updatePasswordController,updateProfilePicController} from '../controllers/userController.js';
import  {isAuth} from '../middlewares/authMiddleware.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router()

router.post("/register",registerController)
//LOGIN
router.post("/login",loginController)

//getuser router
router.get("/profile",isAuth,getUserProfileController)

//logout
router.get("/logout",isAuth,logoutController)

//update profile 
router.put("/profile-update",isAuth,updateUserProfileController)

//update user password
router.put("/password-update",isAuth,updatePasswordController)

//UPDATE PROFILE PIC
router.put("/update-picture",isAuth,singleUpload,updateProfilePicController)

export default router;