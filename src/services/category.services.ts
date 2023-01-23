import { Category } from "../protocols.js";
import { postCategory } from "../repositores/category.repositore.js";

export async function categoryServices(category: Category) {
  const { name } = category;
  try {
    await postCategory(name);
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
}
