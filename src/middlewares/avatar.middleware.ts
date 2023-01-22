import { NextFunction, Request, Response } from "express";
import {CreateAvatar} from "../protocols.js";
import { createAvatarSchema } from "../schemas/avatar.schema.js";

export function avatarValidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const avatar = req.body as CreateAvatar;

  const { error } = createAvatarSchema.validate(avatar, { abortEarly: false });
  if (error) {
    return res.status(409).send(error.message);
  }
  res.locals.avatars = avatar;
  next();
}
