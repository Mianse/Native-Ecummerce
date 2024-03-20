import express from "express";
import { getAllProductController,getSingleProductController,productReviewController,deleteProductController,deleteProductImageController,uploadImageController, createProductController,updateProductController} from "../controllers/productController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router()
//get all products
router.get("/get-all",getAllProductController)
//get single product
router.get("/:id",getSingleProductController)

//create product route
router.post("/create",isAuth,singleUpload,createProductController)

//update product
router.put("/:id",isAuth,singleUpload,updateProductController)

//update product image
router.put("/image/:id",isAuth,singleUpload,uploadImageController)

//delete product image
router.delete("/delete-productimage/:id",isAuth,deleteProductImageController)

//delete product 
router.delete("/delete/:id",isAuth,deleteProductController)


// REVIEW PRODUCT
router.put("/:id/review", isAuth, productReviewController);

// ====================================================================

export default router