import { Router } from "express";
import { createProducts, deleteProduct, getAllProducts, getByCategory, getProductById, home, updateProduct } from "../controllers/homeController.js";

const router = Router()

router.get("/", home)
router.get("/api/produtos", getAllProducts)
router.get("/api/produtos/:id", getProductById)
router.get("/api/produtos/category/:category", getByCategory)
router.post("/api/produtos", createProducts)
router.put("/api/produtos/:id", updateProduct)
router.delete("/api/produtos/:id", deleteProduct)


export default router