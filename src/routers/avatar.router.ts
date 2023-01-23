import { Router } from "express";
import {
  avatarValidate,
  updateAvatarValidate,
} from "../middlewares/avatar.middleware.js";
import {
  createAvatar,
  listAvatars,
  updateAvatarPerId,
} from "../controllers/avatar.controller.js";

const router = Router();

router.post("/avatar", avatarValidate, createAvatar);
router.get("/avatar", listAvatars);
router.put("/avatar/:id", updateAvatarValidate, updateAvatarPerId);

export default router;
