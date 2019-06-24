import { Request, Response } from 'express';
import path from 'path';
import { TestQuery } from '../serverDAL/test'

class IndexController {
    
    async test(req: Request, res: Response){
       const queryResult = await TestQuery();
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