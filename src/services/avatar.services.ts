import { CreateAvatar, Id, UpdateAvatar } from "../protocols.js";
import {
  postAvatar,
  putAvatar,
  searchIdAvatar,
} from "../repositores/avatar.repositore.js";

export async function createAvatarRules(avatar: CreateAvatar) {
  const { name, age, superPower, idCategory } = avatar;
  try {
    await postAvatar(name, age, superPower, idCategory);
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updateAvatarRules(id: Id, avatar: UpdateAvatar) {
  const { name, age, superPower, idCategory } = avatar;
  try {
    const idExists = await searchIdAvatar(id);
    if (idExists.rows[0] === undefined)
      return new Error("Avatar não encontrado !");
    return await putAvatar(id, name, age, superPower, idCategory);
  } catch (error) {
    return error;
  }
}
