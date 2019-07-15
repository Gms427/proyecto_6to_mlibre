import { Request, Response } from 'express';
import path from 'path';
import { TestDAL } from '../serverDAL/testDAL'
import { QueryResult } from 'pg';
import { Utils } from '../utils/utils';

class IndexController {
    
    async test(req: Request, res: Response): Promise<void>{
       const queryResult: QueryResult = await TestDAL.TestQuery();
       res.send(queryResult.rows);
    }

    index(req: Request, res: Response){
        res.send('Hello');
    }

    main(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, '../../../client/web-app/dist/web-app/index.html'));
    }

	getProducts(req: Request, res: Response){

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

        /*let result = rows.map(filter => {
            let values = rows.filter(f => {
                return f.id_filter === filter.id_filter;
            }).map(f => {
                f.option_value;
            });

            return {
                Id: filter.id_filter,
                Name: filter.filter_name,
                Type: filter.filter_type,
                Values: values
            }
        });*/

        let result: any = [];
        rows.forEach(filter => {
            let options: any = [];
            rows.forEach(f => {
                if(filter.id_filter === f.id_filter && f.option_value != null){
                    options.push(f.option_value);
                }
            });
            if(filter.filter_type === "BOOLEAN"){
                result.push({
                    Id: filter.id_filter,
                    Name: filter.filter_name,
                    Type: filter.filter_type,
                    Options: options,
                    Values: [false]
                }); 
            }else{
                result.push({
                    Id: filter.id_filter,
                    Name: filter.filter_name,
                    Type: filter.filter_type,
                    Options: options,
                    Values: []
                }); 
            }
            
        });
        result = Utils.getUnique(result, "Id");

        res.send(result);
    }
}

export const indexController = new IndexController();