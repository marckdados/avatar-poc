import { Request, Response } from "express";
import { Avatar, CreateAvatar, Id, Name, UpdateAvatar } from "../protocols.js";
import {
  createAvatarRules,
  deleteAvatarRules,
  filterAvatarRules,
  updateAvatarRules,
} from "../services/avatar.services.js";

import { getAvatars } from "../repositores/avatar.repositore.js";
import { QueryResultRow } from "pg";

export async function createAvatar(
  req: Request,
  res: Response
): Promise<QueryResultRow> {
  const avatar = res.locals.avatars as CreateAvatar;
  try {
    await createAvatarRules(avatar);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function listAvatars(
  req: Request,
  res: Response
): Promise<QueryResultRow> {
  const { name } = req.query as Name;
  try {
    if (name !== undefined) {
      const avatarPerName = await filterAvatarRules(name);
      return res.status(200).send(avatarPerName.rows);
    }
    const avatars = await getAvatars();
    return res.status(200).send(avatars.rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function updateAvatarPerId(
  req: Request,
  res: Response
): Promise<QueryResultRow> {
  const id = req.params as Id;

  const avatar = res.locals.avatars as UpdateAvatar;

  try {
    await updateAvatarRules(id, avatar);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function deleteAvatarPerId(
  req: Request,
  res: Response
): Promise<QueryResultRow> {
  const id = req.params as Id;
  try {
    await deleteAvatarRules(id);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}
