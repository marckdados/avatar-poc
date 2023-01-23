import { Router } from "express";
import { categoryValidate } from "../middlewares/category.middleware.js";
import { categoryController } from "../controllers/category.controller.js";

const router = Router();

router.post("/category", categoryValidate, categoryController);

export default router;
