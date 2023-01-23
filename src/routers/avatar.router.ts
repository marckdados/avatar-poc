import { Router } from "express";
import { avatarValidate } from "../middlewares/avatar.middleware.js";
import { createAvatar, listAvatars } from "../controllers/avatar.controller.js";

const router = Router();

router.post("/avatar", avatarValidate, createAvatar);
router.get("/avatar", listAvatars);
router.put("/avatar/:id")

export default router;
