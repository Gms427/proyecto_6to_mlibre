import { Request, Response } from 'express';
import path from 'path';

class IndexController {
    
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