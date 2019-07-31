import { Request, Response } from 'express';
import path from 'path';
import { TestDAL } from '../serverDAL/testDAL'
import { QueryResult } from 'pg';
import { Utils } from '../utils/utils';
import { Category } from '../models/Category';
import { Subcategory } from '../models/Subcategory';
import { Publication } from '../models/Publication';

class IndexController {

    public Publications: Publication[] = [
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
    
    async test(req: Request, res: Response): Promise<void>{
       const queryResult: QueryResult = await TestDAL.TestQuery();
       res.send(queryResult.rows);
    }

    index(req: Request, res: Response){
        res.sendFile(path.join(__dirname, '../../../client/web-app/dist/web-app/index.html'));
    }

    main(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, '../../../client/web-app/dist/web-app/index.html'));
    }

	getProducts(req: Request, res: Response){
        res.send(this.Publications);
	}

	createProduct(){
	
    }
    
    getProduct(req: Request, res: Response){

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

    async getFiltersInfo(req: Request, res: Response): Promise<void>{
        const queryResult: QueryResult = await TestDAL.GetFiltersInfo();
        const rows = queryResult.rows;
        console.log(queryResult);

        let result: any = [];
        rows.forEach(filter => {
            let options: any = [];
            rows.forEach(f => {
                if(filter.id_filter === f.id_filter && f.option_value != null){
                    options.push(f.option_value);
                }
            });
            let values: any[] = [];

            if(filter.filter_type === "BOOLEAN"){
                values = [false]; // Los boolean vienen con la opción por default en false
            }

            result.push({
                Id: filter.id_filter,
                Name: filter.filter_name,
                Type: filter.filter_type,
                Options: options,
                Values: values
            }); 
            
        });
        result = Utils.getUnique(result, "Id");

        res.send(result);
    }

    async getCategories(req: Request, res: Response): Promise<void>{
        let result = await TestDAL.GetCategories();
        let categories: Category[] = [];

        result.forEach(row => {
            let catExist = categories.find(c => c.IdCategory === row.idcategory);
            if(catExist){
                let subCatExist = catExist.Subcategories.find(s => s.SubcategoryName === row.idsubcategory);
                if(!subCatExist){
                    catExist.Subcategories.push({
                        IdSubcategory: row.idsubcategory,
                        SubcategoryName: row.subcategoryname
                    });
                }
            }else{
                categories.push({
                    CategoryName: row.categoryname,
                    IdCategory: row.idcategory,
                    Subcategories: [{
                        IdSubcategory: row.idsubcategory,
                        SubcategoryName: row.subcategoryname
                    }]
                });
            }
        });

        res.send(categories);
    }
}

export const indexController = new IndexController();