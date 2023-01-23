import { Request, Response, Router } from "express";
import avatar from "./avatar.router.js";
import category from "./categorys.router.js";
const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});
router.use(avatar, category);

export default router;
