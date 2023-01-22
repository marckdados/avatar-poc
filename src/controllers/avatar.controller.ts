import { Request, Response } from "express";
import { CreateAvatar } from "../protocols.js";
import { createAvatarRules } from "../services/avatar.services.js";
import connection from "../database/db.js";
import { getAvatars } from "../repositores/avatar.repositore.js";

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

export async function listAvatars(req: Request, res: Response) {
  try {
    const avatars = await getAvatars();
    return res.status(200).send(avatars.rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
