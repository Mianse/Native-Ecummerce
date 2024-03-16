import express from "express";
import { getAllProductController,getSingleProductController, createProductController} from "../controllers/productController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router()
//get all products
router.get("/get-all",getAllProductController)
//get single product
router.get("/:id",getSingleProductController)

//create product route
router.post("/create",isAuth,singleUpload,createProductController)
export default router