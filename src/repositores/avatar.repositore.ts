import { QueryResult } from "pg";
import connection from "../database/db.js";

export async function postAvatar(
  name: string,
  age: number,
  superPower: string,
  idCategory: number
): Promise<QueryResult> {
  try {
    await connection.query(
      `
      INSERT INTO 
        avatars ("name", "age", "superPower", "idCategory")
      VALUES
        ($1,$2,$3,$4);
     `,
      [name, age, superPower, idCategory]
    );
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
}
