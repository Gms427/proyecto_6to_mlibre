import PgClient from '../database';

export class TestDAL {

    static async TestQuery(){
        const table = "customers";
        const condition = "1 = 1"
        let query = `SELECT * FROM ${table}
                    WHERE ${condition}`;
    
        let result = await PgClient.query(query);
        return result;
    }
}

