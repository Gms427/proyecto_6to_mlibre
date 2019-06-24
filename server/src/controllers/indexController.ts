import { Request, Response } from 'express';
import path from 'path';
import client from '../database';

class IndexController {
    
    test(req: Request, res: Response){
        const table = "customers";
        const condition = "id = 2"
        let query = `SELECT * FROM ${table}
                    WHERE ${condition}`;

        client.query(query, (err: any, response: any) => {
            console.log(err, res);
            res.send(response);
        });
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
}

export const indexController = new IndexController();