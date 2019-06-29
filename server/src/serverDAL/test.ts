import PgClient from '../database';
import { QueryResult } from 'pg';

export class TestDAL {

    static async TestQuery(): Promise<QueryResult>{
        const table = "customers";
        const condition = "1 = 1"
        let query = `SELECT * FROM ${table}
                    WHERE ${condition}`;
    
        let result = await PgClient.query(query);
        return result;
    }
}

