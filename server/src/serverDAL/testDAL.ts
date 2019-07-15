import PgClient from '../database';
import { QueryResult } from 'pg';

export class TestDAL {

    static async TestQuery(): Promise<QueryResult>{
        const table = "users";
        const condition = "1 = 1"
        let query = `SELECT * FROM ${table}
                    WHERE ${condition}`;
    
        let result = await PgClient.query(query);
        return result;
    }

    static async GetFiltersInfo(): Promise<QueryResult>{
        let query = `select
                        fl.id_filter,
                        fl.is_generic,
                        fl.filter_name,
                        fl.filter_type,
                        flop.option_value
                    from filter fl full join filter_option flop
                        on fl.id_filter = flop.id_filter
                    order by fl.id_filter;`;
        let result = await PgClient.query(query);
        return result;
    }
}

