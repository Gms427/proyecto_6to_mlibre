import { Request, Response } from 'express';
import path from 'path';
import { TestDAL } from '../serverDAL/test'
import { QueryResult } from 'pg';

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
}

export const indexController = new IndexController();