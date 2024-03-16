import express from "express";
import { getAllProductController,getSingleProductController } from "../controllers/productController.js";

const router = express.Router()
//get all products
router.get("/get-all",getAllProductController)
//get single product
router.get("/:id",getSingleProductController)
export default router