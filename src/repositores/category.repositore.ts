import { QueryResultRow } from "pg";
import connection from "../database/db.js";

export async function postCategory(name: string): Promise<QueryResultRow> {
  return await connection.query(
    `
        INSERT INTO
            categorys (name)
        VALUES
            ($1);
    `,
    [name]
  );
}
