"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
const signinController_1 = require("../controllers/signinController");
const loginController_1 = require("../controllers/loginController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /*this.router.get('*', (req: Request, res: Response, next: NextFunction) => {
            if (req.method == "OPTIONS")
            {
                res.writeHead(200, {"Content-Type": "application/json"});
                res.send();
                next();
            }
        });*/
        this.router.get('/', indexController_1.indexController.index);
        this.router.get('/test', indexController_1.indexController.test);
        this.router.get('/main', indexController_1.indexController.main);
        this.router.get('/getProducts/:search', indexController_1.indexController.getProducts);
        this.router.get('/getProducts', indexController_1.indexController.getAllProducts);
        this.router.get('/product/:id', indexController_1.indexController.getProduct);
        this.router.post('/signin', signinController_1.signinController.signin);
        this.router.get('/signin', signinController_1.signinController.t);
        this.router.get('/verifyEmail/:email', signinController_1.signinController.verifyEmail);
        this.router.post('/login', loginController_1.loginController.login);
        this.router.get('/getFiltersInfo', indexController_1.indexController.getFiltersInfo);
        this.router.get('/getCategories', indexController_1.indexController.getCategories);
        this.router.get('/getSubcategoryFields/:idSubcategory/:idCategory', indexController_1.indexController.getSubcategoryFields);
        this.router.get('/getUserInfo/:email', indexController_1.indexController.getUserInfo);
        this.router.put('/updateUser', signinController_1.signinController.UpdateUser);
        this.router.post('/checkPassword', loginController_1.loginController.checkPassword);
        this.router.get('/history/:email', indexController_1.indexController.getHistory);
        this.router.post('/product', indexController_1.indexController.uploadPublication);
        this.router.post('/changePass', indexController_1.indexController.changePass);
        this.router.post('/checkCode', indexController_1.indexController.checkCode);
        this.router.post('/product', indexController_1.indexController.uploadPublication);
        this.router.post('/uploadFile', indexController_1.indexController.uploadFile);
        this.router.get('/testMultiQuery', indexController_1.indexController.testMultiQuery);
        this.router.post('/report', indexController_1.indexController.Report);
        this.router.post('/buy', indexController_1.indexController.Buy);
        this.router.get('*', indexController_1.indexController.sendFile);
    }
}
const indexRouter = new IndexRoutes();
exports.default = indexRouter.router;
