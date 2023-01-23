import { QueryResult } from "pg";
import connection from "../database/db.js";
import { Avatar, Id } from "../protocols.js";

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

export async function getAvatars(): Promise<QueryResult<Avatar>> {
  try {
    return connection.query(
      `
      SELECT 
        avatars.id as "idAvatar", avatars.name, avatars."superPower", categorys.name as "categoryAvatar" 
      FROM 
        categorys 
      JOIN 
        avatars 
      ON 
        categorys.id = avatars."idCategory";
      `
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function searchIdAvatar({ id }: Id): Promise<QueryResult<Avatar>> {
  try {
    return connection.query(
      `
        SELECT * FROM 
          avatars 
        WHERE 
          id=$1;
      `,
      [id]
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function putAvatar(
  { id }: Id,
  name?: string,
  age?: number,
  superPower?: string,
  idCategory?: number
) {
  try {
    return connection.query(
      `
        UPDATE
          avatars
        SET
          name=$2, age=$3, "superPower"=$4, "idCategory"=$5
        WHERE
          id=$1
      `,
      [id, name, age, superPower, idCategory]
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function deleteAvatar({ id }: Id): Promise<QueryResult<Id>> {
  try {
    return await connection.query(
      `
        DELETE FROM
          avatars
        WHERE
          id=$1
      `,
      [id]
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getAvatarFilter(
  name: string
): Promise<QueryResult<Avatar>> {
  try {
    return await connection.query(
      `
        SELECT * FROM avatars WHERE name ILIKE $1 ;
      `,
      [name + '%']
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}
