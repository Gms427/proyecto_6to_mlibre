import { Request, Response } from 'express';
import path from 'path';
import client from '../database';
import { TestQuery } from '../serverDAL/test'

class IndexController {
    
    test(req: Request, res: Response){
       const queryResult = TestQuery();
       console.log("aaaa", queryResult);
       res.send(queryResult);
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