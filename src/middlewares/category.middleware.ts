import { NextFunction, Request, Response } from "express";
import { Category } from "../protocols.js";
import { categorySchema } from "../schemas/catergory.schema.js";

export function categoryValidate(
  req: Request,
  res: Response,
  next: NextFunction
) : Response {
  const category = req.body as Category;

  const { error } = categorySchema.validate(category, { abortEarly: false });
  if (error) {
    return res.status(409).send(error.message);
  }
  res.locals.categorys = category;
  next();
}
