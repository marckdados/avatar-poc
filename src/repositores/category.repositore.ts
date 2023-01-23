import connection from "../database/db.js";

export async function postCategory(name: string){
    return await connection.query(
    `
        INSERT INTO
            categorys (name)
        VALUES
            ($1);
    `,[name]
 );
}