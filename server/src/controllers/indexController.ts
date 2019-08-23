import { Request, Response } from 'express';
import * as path from 'path';
import { TestDAL } from '../serverDAL/testDAL';
import { QueryResult } from 'pg';
import { Utils } from '../utils/utils';
import { Category, Subcategory, Publication, Filter } from '../models/models';
import { publications } from '../utils/utils';
import { User } from '../models/User';
import { UserUpdate } from '../serverDAL/DTOs/SigninDTO';

class IndexController {

    async test(req: Request, res: Response): Promise<void> {
        const queryResult: QueryResult = await TestDAL.TestQuery();
        res.send(queryResult.rows);
    }

    index(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, '../../../client/web-app/dist/web-app/index.html'));
    }

    main(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, '../../../client/web-app/dist/web-app/index.html'));
    }

	async getProducts(req: Request, res: Response){
        let products = await TestDAL.GetProducts(req.params.search);
        
        let idProducts = products.map(p => p.id_product);
        let imgs = await TestDAL.GetProductsImgs(idProducts);

        let finalProducts = products.map(p => {
            let images = imgs.filter(i => i.id_product == p.id_product);

            return {
                Id: p.id_product,
                Name: p.name,
                Price: p.price,
                State: p.status,
                Shipping: false,
                Favorite: false,
                Imgs: images
            }
        });
        //res.send(publications);
        res.send(finalProducts);
    }

    getProduct(req: Request, res: Response) {

        const list = [
            {
                Id: 1,
                Name: "Chevrolet Celta 1.0 full",
                Price: "U$S 7.450",
                State: true,
                Shipping: true,
                Favorite: false,
                Img:
                    "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
            },
            {
                Id: 2,
                Name: "Chevrolet Celta 1.0 full",
                Price: "U$S 7.450",
                State: false,
                Shipping: false,
                Favorite: false,
                Img:
                    "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-128-gb-refurbished-macrotec-D_NP_929296-MLU29526633106_022019-X.webp"
            },
            {
                Id: 3,
                Name: "Chevrolet Celta 1.0 full",
                Price: "U$S 7.450",
                State: false,
                Shipping: true,
                Favorite: false,
                Img:
                    "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
            }
        ];
        const id = req.params.id;
        res.json(list.find((product) => product.Id == id));
    }

    async getFiltersInfo(req: Request, res: Response): Promise<void> {
        const queryResult: QueryResult = await TestDAL.GetFiltersInfo();
        const rows = queryResult.rows;

        let result: Filter[] = [];
        rows.forEach(filter => {
            let options: any = [];
            rows.forEach(f => {
                if (filter.id_filter === f.id_filter && f.option_value != null) {
                    options.push(f.option_value);
                }
            });
            let values: any[] = [];

            if (filter.filter_type === "BOOLEAN") {
                values = [false]; // Los boolean vienen con la opción por default en false
            }

            result.push({
                Id: filter.id_filter,
                Name: filter.filter_name,
                Type: filter.filter_type,
                Options: options,
                Values: values,
                Category: (filter.id_category != 0) ? filter.id_category : null,
                Subcategory: (filter.id_subcategory) ? filter.id_subcategory: null,
                TableName: filter.table_name,
                ColumnName: filter.column_name
            });

        });
        result = Utils.getUnique(result, "Id");

        res.send(result);
    }

    async getCategories(req: Request, res: Response): Promise<void> {
        let result = await TestDAL.GetCategories();
        console.log(result);
        let categories: Category[] = [];

        result.forEach(row => {
            let catExist = categories.find(c => c.Id === row.idcategory);
            if (catExist) {
                let subCatExist = catExist.Subcategories.find(s => s.Name === row.idsubcategory);
                if (!subCatExist) {
                    catExist.Subcategories.push({
                        Id: row.idsubcategory,
                        Name: row.subcategoryname
                    });
                }
            } else {
                categories.push({
                    Name: row.categoryname,
                    Id: row.idcategory,
                    Subcategories: [{
                        Id: row.idsubcategory,
                        Name: row.subcategoryname
                    }],
                    Icon: row.icon
                });
            }
        });
        res.send(categories);
    }

    async getSubcategoryFields(req: Request, res: Response): Promise<void> {
        let idSubcategory = req.params.idSubcategory;
        let idCategory = req.params.idCategory
        let result = await TestDAL.GetSubcategoryFields(idSubcategory, idCategory);
        console.log(result);

        let fieldsWithDefaultValues = result.filter(f => f.filter_type === 'SELECTIONABLE_LIST' || f.filter_type === 'OPTIONS_LIST')
            .map(f => f.id_filter);

        let defaultValues: any[] | never[] = [];
        if(fieldsWithDefaultValues.length > 0){
            defaultValues = await TestDAL.GetFilterValues(fieldsWithDefaultValues);
        }

        console.log("fieldsWithDefaultValues", defaultValues);

        let finalResult: Filter[] = result.map((f) => {

            let options = defaultValues.filter(d => d.id_filter === f.id_filter).map(v => v.option_value);
            let values: any[] = [];
            if (f.filter_type === "BOOLEAN") {
                values = [false]; // Los boolean vienen con la opción por default en false
            }

            return {
                Id: f.id_filter,
                Name: f.filter_name,
                Type: f.filter_type,
                Options: options,
                Values: values,
                Category: (f.id_category != 0) ? f.id_category : null,
                Subcategory: (f.id_subcategory) ? f.id_subcategory: null,
                TableName: f.table_name,
                ColumnName: f.column_name
            }
        });
        console.log(finalResult);
        res.send(finalResult);
    }

    async getUserInfo(req: Request, res: Response){        
        let queryResult = await TestDAL.GetUserInfo(req.params.email);
        let user: User = {
            Id: queryResult.id_user,
            FullName: queryResult.full_name,
            City: queryResult.city,
            DateOfBirth: queryResult.date_of_birth,
            Departament: queryResult.departament,
            Email: queryResult.email,
            Neighborhood: queryResult.neighborhood,
            Phone: queryResult.phone,
            Status: queryResult.status,
            Street: queryResult.street
        }
        res.send(user);
    }

    async getHistory(req: Request, res: Response){
        let history = await TestDAL.GetUserHistory(req.params.email);
        let idsProducts = history.map(h => h.id_product);
        console.log(history);
        let imgs = await TestDAL.GetProductsImgs(idsProducts);

        let finalHistory = history.map(p => {
            let images = imgs.filter(i => i.id_product == p.id_product);

            return {
                Id: p.id_product,
                Name: p.name,
                Price: p.price,
                State: p.status,
                Shipping: false,
                Favorite: false,
                Date: p.date_of_visit,
                Currency: p.currency,
                Imgs: images,
            }
        });
        //console.log(finalHistory);

        res.send(finalHistory);
    }

    async getAllProducts(req: Request, res: Response){
        let products = await TestDAL.GetAllProducts();
        let idsProducts = products.map(h => h.id_product);

        let imgs = await TestDAL.GetProductsImgs(idsProducts);

        let finalProducts = products.map(p => {
            let images = imgs.filter(i => i.id_product == p.id_product);

            return {
                Id: p.id_product,
                Name: p.name,
                Price: p.price,
                State: p.status,
                Shipping: false,
                Favorite: false,
                Date: p.date_of_visit,
                Currency: p.currency,
                Imgs: images,
            }
        });

        res.send(finalProducts);
    }

    async uploadPublication(req: Request, res: Response) {
        let user: UserUpdate = req.body.user;
        let publication: Publication = req.body.publication;
        console.log(user);
        console.log(publication);
        try {
            let userAuth = Utils.validateUserForSell(user);
            console.log('userauth', userAuth);
            if (userAuth) {
                let queryResult = await TestDAL.uploadPublication(publication, user);
            } else {
                throw 'Usuario no autorizado para vender';
            }
        } catch (error) {
            res.send(error);
        }
        res.send();
    }
}

export const indexController = new IndexController();