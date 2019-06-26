import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void { 
        this.router.get('/', indexController.index);
        this.router.get('/test', indexController.test);
        this.router.get('/main', indexController.main);
		this.router.get('/getProducts', indexController.getProducts);
        this.router.post('/product', indexController.createProduct);
        this.router.get('/product/:id', indexController.getProduct);
    }
}

const indexRouter = new IndexRoutes();
export default indexRouter.router;