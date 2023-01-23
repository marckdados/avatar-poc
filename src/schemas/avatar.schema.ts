import joi from "joi";

const createAvatarSchema = joi.object({
  name: joi.string().min(3).required(),
  age: joi.number().min(0).required(),
  superPower: joi.string().min(3).required(),
  idCategory: joi.number().min(1).max(3).default(1),
});

const updateAvatarSchema = joi.object({
  name: joi.string().min(3).required(),
  age: joi.number().min(0).required(),
  superPower: joi.string().min(3).required(),
  idCategory: joi.number().min(1).max(3).required(),
});

export { createAvatarSchema, updateAvatarSchema };
