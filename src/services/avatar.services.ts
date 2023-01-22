import CreateAvatar from "../protocols.js";
import { postAvatar } from "../repositores/avatar.repositore.js";

export async function createAvatarRules(avatar: CreateAvatar) {
    const {name, age, superPower, idCategory} = avatar;
  try {
    await postAvatar(name,age, superPower, idCategory);
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
}
