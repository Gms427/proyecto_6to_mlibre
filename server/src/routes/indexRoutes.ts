import { Router } from 'express';
import { indexController } from '../controllers/indexController';
import { signinController } from '../controllers/signinController';
import { loginController } from '../controllers/loginController';

class IndexRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void { 
        this.router.get('/', indexController.index);
        this.router.get('/test', indexController.test);
        this.router.get('/main', indexController.main);
        this.router.get('/getProducts/:search', indexController.getProducts);
        this.router.get('/getProducts', indexController.getAllProducts);
        this.router.get('/product/:id', indexController.getProduct);
        this.router.post('/signin', signinController.signin);
        this.router.get('/signin', signinController.t);
        this.router.get('/verifyEmail/:email', signinController.verifyEmail);
        this.router.post('/login', loginController.login);
        this.router.get('/getFiltersInfo', indexController.getFiltersInfo);
        this.router.get('/getCategories', indexController.getCategories);
        this.router.get('/getSubcategoryFields/:idSubcategory/:idCategory', indexController.getSubcategoryFields);
        this.router.get('/getUserInfo/:email', indexController.getUserInfo);
        this.router.put('/updateUser', signinController.UpdateUser);
        this.router.post('/checkPassword', loginController.checkPassword);        
        this.router.get('/history/:email', indexController.getHistory);
        this.router.post('/product', indexController.uploadPublication);        

    }
}

const indexRouter = new IndexRoutes();
export default indexRouter.router;