import { Router } from "express";
import { avatarValidate } from "../middlewares/avatar.middleware.js";
import { createAvatar } from "../controllers/avatar.controller.js";

const router = Router();

router.post("/avatar", avatarValidate, createAvatar);

export default router;
