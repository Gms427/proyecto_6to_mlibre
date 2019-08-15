import PgClient from '../database';
import { QueryResult, Query } from 'pg';

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
                    where fl.is_generic = 1
                    order by fl.id_filter;`;
        let result = await PgClient.query(query);
        return result;
    }

    static async GetCategories(): Promise<QueryResult["rows"]>{
        let query = `select 
                        cat.id_category as IdCategory,
                        cat.name as CategoryName,
                        cat.icon as Icon,
                        scat.name as SubcategoryName,
                        scat.id_subcategory as IdSubcategory
                    from category cat inner join subcategory scat
                        on cat.id_category = scat.id_category
                    where cat.id_category <> 0
                    order by cat.id_category;`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async getSubcategoryFields(idSubcategory: number, idCategory: number): Promise<QueryResult["rows"]>{
        let query = `select	fl.id_filter,
                            fl.is_generic,
                            fl.filter_name,
                            fl.filter_type
                    from filter fl
                    where (fl.id_subcategory = '${idSubcategory}'
                    or fl.id_category = '${idCategory}' or fl.is_generic = 1)
                    and fl.id_filter not in (1,3,4)
                    order by fl.filter_name`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async getFilterValues(idsFilters: number[]): Promise<QueryResult["rows"]>{
        let query = `select
                        fl.id_filter,
                        fl.is_generic,
                        fl.filter_name,
                        fl.filter_type,
                        flop.option_value
                    from filter fl inner join filter_option flop
                        on fl.id_filter = flop.id_filter
                    where fl.id_filter in (${idsFilters})
                    order by flop.option_value;`
                    console.log(query);
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async getUserInfo(userEmail: string){
        let query = `select * from users where email = '${userEmail}'`;
        let result = await PgClient.query(query);
        return result.rows[0];
    }
}

