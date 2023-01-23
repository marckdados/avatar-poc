import { NextFunction, Request, Response } from "express";
import { CreateAvatar, Id, UpdateAvatar } from "../protocols.js";
import {
  createAvatarSchema,
  updateAvatarSchema,
} from "../schemas/avatar.schema.js";

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

export function updateAvatarValidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params as Id;
  const avatar = req.body as UpdateAvatar;

  const { error } = updateAvatarSchema.validate(avatar, { abortEarly: false });
  if (error) {
    return res.status(409).send(error.message);
  }
  res.locals.avatars = avatar;
  next();
}

