import PgClient from '../database';
import { QueryResult, Query } from 'pg';
import { Publication } from '../models/models';
import { UserUpdate } from './DTOs/SigninDTO';

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
                    console.log(query);
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
                    where cat.id_category in (1,2,3,4)
                    order by cat.id_category;`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async GetSubcategoryFields(idSubcategory: number, idCategory: number): Promise<QueryResult["rows"]>{
        let query = `select	fl.id_filter,
                            fl.is_generic,
                            fl.filter_name,
                            fl.filter_type,
                            fl.id_category,
                            fl.id_subcategory,
                            fl.table_name,
                            fl.column_name
                    from filter fl
                    where (fl.id_subcategory = '${idSubcategory}'
                    or fl.id_category = '${idCategory}')
                    and fl.id_filter not in (1,3,4)
                    order by fl.filter_name`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async GetFilterValues(idsFilters: number[]): Promise<QueryResult["rows"]>{
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

    static async GetUserInfo(userEmail: string){
        let query = `select * from users where email = '${userEmail}'`;
        let result = await PgClient.query(query);
        return result.rows[0];
    }

    static async GetProducts(searchValue: string): Promise<QueryResult["rows"]>{
        let query = `SELECT * FROM product WHERE name ~* '${searchValue}';`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async GetProductsImgs(idsProducts: number[]): Promise<QueryResult["rows"]>{
        let query = `SELECT * FROM product_img WHERE id_product in (${idsProducts})`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async GetUserHistory(email: string): Promise<QueryResult["rows"]>{
        let query = `select 	pr.id_product,
                            pr.id_user,
                            pr.price,
                            pr.currency,
                            pr.description,
                            pr.category,
                            pr.subcategory,
                            pr.name,
                            pr.stock,
                            pr.warranty,
                            pr.status,
                            his.date_of_visit
                    from product pr
                    inner join history his
                        on pr.id_product = his.id_product
                    inner join users us
                        on pr.id_user = us.id_user
                    where us.email = '${email}';`
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async GetAllProducts(): Promise<QueryResult["rows"]>{
        let query = `select * from product where status = 1;`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async uploadPublication(publication: Publication, user: UserUpdate){
        let query = `INSERT INTO PRODUCT (
            ID_USER, 
            PRICE, 
            CURRENCY, 
            DESCRIPTION, 
            CATEGORY, 
            SUBCATEGORY,
            NAME, 
            STOCK,
            STATUS
            ) VALUES(
            '${user.Id}',
            '${publication.Price}',
            '${publication.Currency}',
            '${publication.Description}',
            '${publication.Category}',
            '${publication.Subcategory}',
            '${publication.Title}',
            '${publication.Stock}',
            1
            )`;
        console.log('query', query);
        let result = await PgClient.query(query);
        return result.rows[0];
    }
}
