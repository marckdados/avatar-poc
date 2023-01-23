import { Request, Response } from "express";
import { Category } from "../protocols.js";
import { categoryServices } from "../services/category.services.js";
import { QueryResultRow } from "pg";

export async function categoryController(
  req: Request,
  res: Response
): Promise<QueryResultRow> {
  const category = res.locals.categorys as Category;
  try {
    await categoryServices(category);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
