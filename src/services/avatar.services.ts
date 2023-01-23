import { QueryResult } from "pg";
import { Avatar, CreateAvatar, Id, UpdateAvatar } from "../protocols.js";
import {
  deleteAvatar,
  getAvatarFilter,
  postAvatar,
  putAvatar,
  searchIdAvatar,
} from "../repositores/avatar.repositore.js";

export async function createAvatarRules(
  avatar: CreateAvatar
): Promise<QueryResult<Avatar>> {
  const { name, age, superPower, idCategory } = avatar;
  try {
    await postAvatar(name, age, superPower, idCategory);
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function filterAvatarRules(
  name: string
): Promise<QueryResult<Avatar>> {
  try {
    const result = await getAvatarFilter(name);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updateAvatarRules(
  id: Id,
  avatar: UpdateAvatar
): Promise<QueryResult<Avatar>> {
  const { name, age, superPower, idCategory } = avatar;
  try {
    const idExists = await searchIdAvatar(id);
    if (idExists.rowCount === 0) throw new Error("Avatar não encontrado !");
    return await putAvatar(id, name, age, superPower, idCategory);
  } catch (error) {
    return error;
  }
}

export async function deleteAvatarRules(id: Id): Promise<QueryResult<Id>> {
  try {
    const idExists = await searchIdAvatar(id);
    console.log(idExists.rowCount);
    if (idExists.rowCount === 0) throw new Error("Avatar não encontrado !");
    return await deleteAvatar(id);
  } catch (error) {
    return error;
  }
}
