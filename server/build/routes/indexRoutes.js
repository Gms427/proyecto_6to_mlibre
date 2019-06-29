"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        this.router.get('/test', indexController_1.indexController.test);
        this.router.get('/main', indexController_1.indexController.main);
        this.router.get('/getProducts', indexController_1.indexController.getProducts);
        this.router.post('/product', indexController_1.indexController.createProduct);
        this.router.get('/product/:id', indexController_1.indexController.getProduct);
    }
}
const indexRouter = new IndexRoutes();
exports.default = indexRouter.router;
