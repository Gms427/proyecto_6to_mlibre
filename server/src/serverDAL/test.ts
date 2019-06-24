import PgClient from '../database';

export async function TestQuery(){
    const table = "customers";
    const condition = "1 = 1"
    let query = `SELECT * FROM ${table}
                WHERE ${condition}`;

    let result = await PgClient.query(query);
    return result;
}