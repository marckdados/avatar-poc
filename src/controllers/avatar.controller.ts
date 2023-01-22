import { Request, Response } from "express";
import CreateAvatar from "../protocols.js";
import { createAvatarRules } from "../services/avatar.services.js";

export async function createAvatar(req: Request, res: Response) {
  const avatar = res.locals.avatars as CreateAvatar;
  try {
    await createAvatarRules(avatar);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
