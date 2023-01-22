import joi from "joi";

const createAvatarSchema = joi.object({
  name: joi.string().min(3).required(),
  age: joi.number().min(0).required(),
  superPower: joi.string().min(3).required(),
  idCategory: joi.number().min(0).max(2).default(0),
});

export { createAvatarSchema };