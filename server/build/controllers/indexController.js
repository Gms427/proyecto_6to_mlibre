"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const testDAL_1 = require("../serverDAL/testDAL");
const utils_1 = require("../utils/utils");
class IndexController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResult = yield testDAL_1.TestDAL.TestQuery();
            res.send(queryResult);
        });
    }
    index(req, res) {
        res.sendFile(path.join(__dirname, '../../../client/dist/web-app/index.html'));
    }
    main(req, res) {
        res.sendFile(path.join(__dirname, '../../../client/web-app/dist/web-app/index.html'));
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let products = yield testDAL_1.TestDAL.GetProducts(req.params.search);
                let idProducts = products.map(p => p.id_product);
                if (idProducts.length > 0) {
                    let imgs = yield testDAL_1.TestDAL.GetProductsImgs(idProducts);
                    let finalProducts = products.map(p => {
                        let images = imgs.filter(i => i.id_product == p.id_product);
                        return {
                            Id: p.id_product,
                            Name: p.name,
                            Price: p.price,
                            State: p.status,
                            Shipping: false,
                            Favorite: false,
                            Date: p.date_of_visit,
                            Currency: p.currency,
                            Imgs: images,
                            NewOrUsed: p.is_new,
                            OfficialStore: true,
                            Ubication: 'Montevideo',
                            Category: p.category,
                            Subcategory: p.subcategory
                        };
                    });
                    //res.send(publications);
                    res.send(finalProducts);
                }
                else {
                    res.send();
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idPublication = req.params.id;
            let product = yield testDAL_1.TestDAL.GetProductById(idPublication);
            console.log(product);
            let fields = yield testDAL_1.TestDAL.GetFields(product.category, product.subcategory, idPublication);
            let catFields = [];
            let subCatFields = [];
            fields.forEach((f) => {
                if (f.id_category) {
                    catFields.push({
                        Id: f.id_filter,
                        Name: f.filter_name,
                        Type: f.filter_type,
                        TableName: f.table_name,
                        ColumnName: f.column_name,
                        Values: []
                    });
                }
                else {
                    subCatFields.push({
                        Id: f.id_filter,
                        Name: f.filter_name,
                        Type: f.filter_type,
                        TableName: f.table_name,
                        ColumnName: f.column_name,
                        Values: []
                    });
                }
            });
            console.log('CategoryFields --> ', catFields);
            console.log('SubcategoryFields --> ', subCatFields);
            let selectForCategoryFields = utils_1.Utils.buildSelect(catFields, idPublication);
            let selectForSubcategoryFields = utils_1.Utils.buildSelect(subCatFields, idPublication);
            let categoryFieldsValues = yield testDAL_1.TestDAL.GetFieldsValues(selectForCategoryFields);
            let subcategoryFieldsValues = yield testDAL_1.TestDAL.GetFieldsValues(selectForSubcategoryFields);
            console.log("CategoryFields values -->", categoryFieldsValues);
            console.log("SubcategoryFields values -->", subcategoryFieldsValues);
            let keys = Object.keys(categoryFieldsValues[0]);
            console.log("KEYS", keys);
            keys.forEach((k) => {
                let field = catFields.find(c => c.ColumnName === k.toLocaleUpperCase());
                if (field) {
                    field.Values = categoryFieldsValues[0][k];
                }
            });
            keys = Object.keys(subcategoryFieldsValues[0]);
            keys.forEach((k) => {
                let field = subCatFields.find(c => c.ColumnName === k.toLocaleUpperCase());
                if (field) {
                    field.Values = subcategoryFieldsValues[0][k];
                }
            });
            console.log("catFields asdasd", catFields);
            console.log("subCatFields asdasd", subCatFields);
            let imgs = yield testDAL_1.TestDAL.GetProductsImgs(product.id_product);
            let imgsData = imgs.map(img => img.image);
            let finalPublication = {
                Id: product.id_product,
                Name: product.name,
                Description: product.description,
                Price: product.price,
                DateOfCreation: product.date_of_creation,
                Currency: product.currency,
                Stock: product.stock,
                State: product.status,
                Shipping: false,
                Imgs: imgsData,
                NewOrUsed: product.is_new,
                Category: product.category,
                Subcategory: product.subcategory,
                Fields: [...subCatFields, ...catFields]
            };
            console.log('Final Publication => ', finalPublication);
            res.send(finalPublication);
        });
    }
    getFiltersInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResult = yield testDAL_1.TestDAL.GetFiltersInfo();
            const rows = queryResult.rows;
            console.log(rows);
            let result = [];
            rows.forEach(filter => {
                let options = [];
                rows.forEach(f => {
                    if (filter.id_filter === f.id_filter && f.option_value != null) {
                        options.push(f.option_value);
                    }
                });
                let values = [];
                if (filter.filter_type === "BOOLEAN") {
                    values = [false]; // Los boolean vienen con la opción por default en false
                }
                result.push({
                    Id: filter.id_filter,
                    Name: filter.filter_name,
                    Type: filter.filter_type,
                    Options: options,
                    Values: values,
                    Category: (filter.id_category != 0) ? filter.id_category : null,
                    Subcategory: (filter.id_subcategory) ? filter.id_subcategory : null,
                    TableName: filter.table_name,
                    ColumnName: filter.column_name
                });
            });
            result = utils_1.Utils.getUnique(result, "Id");
            res.send(result);
        });
    }
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield testDAL_1.TestDAL.GetCategories();
            let categories = [];
            result.forEach(row => {
                let catExist = categories.find(c => c.Id === row.idcategory);
                if (catExist) {
                    let subCatExist = catExist.Subcategories.find(s => s.Name === row.idsubcategory);
                    if (!subCatExist) {
                        catExist.Subcategories.push({
                            Id: row.idsubcategory,
                            Name: row.subcategoryname
                        });
                    }
                }
                else {
                    categories.push({
                        Name: row.categoryname,
                        Id: row.idcategory,
                        Subcategories: [{
                                Id: row.idsubcategory,
                                Name: row.subcategoryname
                            }],
                        Icon: row.icon
                    });
                }
            });
            res.send(categories);
        });
    }
    getSubcategoryFields(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let idSubcategory = req.params.idSubcategory;
            let idCategory = req.params.idCategory;
            let result = yield testDAL_1.TestDAL.GetSubcategoryFields(idSubcategory, idCategory);
            console.log(result);
            let fieldsWithDefaultValues = result.filter(f => f.filter_type === 'SELECTIONABLE_LIST' || f.filter_type === 'OPTIONS_LIST')
                .map(f => f.id_filter);
            let defaultValues = [];
            if (fieldsWithDefaultValues.length > 0) {
                defaultValues = yield testDAL_1.TestDAL.GetFilterValues(fieldsWithDefaultValues);
            }
            console.log("fieldsWithDefaultValues", defaultValues);
            let finalResult = result.map((f) => {
                let options = defaultValues.filter(d => d.id_filter === f.id_filter).map(v => v.option_value);
                let values = [];
                if (f.filter_type === "BOOLEAN") {
                    values = [false]; // Los boolean vienen con la opción por default en false
                }
                return {
                    Id: f.id_filter,
                    Name: f.filter_name,
                    Type: f.filter_type,
                    Options: options,
                    Values: values,
                    Category: (f.id_category != 0) ? f.id_category : null,
                    Subcategory: (f.id_subcategory) ? f.id_subcategory : null,
                    TableName: f.table_name,
                    ColumnName: f.column_name
                };
            });
            console.log(finalResult);
            res.send(finalResult);
        });
    }
    getUserInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResult = yield testDAL_1.TestDAL.GetUserInfo(req.params.email);
            let user = {
                Id: queryResult.id_user,
                FullName: queryResult.full_name,
                Ubication: {
                    Departament: queryResult.departament,
                    City: queryResult.city,
                    Street: queryResult.street,
                    Neighborhood: queryResult.neighborhood,
                },
                DateOfBirth: queryResult.date_of_birth,
                Email: queryResult.email,
                Phone: queryResult.phone,
                Status: queryResult.status,
            };
            res.send(user);
        });
    }
    getHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let history = yield testDAL_1.TestDAL.GetUserHistory(req.params.email);
            let idsProducts = history.map(h => h.id_product);
            console.log(history);
            let imgs = yield testDAL_1.TestDAL.GetProductsImgs(idsProducts);
            let finalHistory = history.map(p => {
                let images = imgs.filter(i => i.id_product == p.id_product);
                return {
                    Id: p.id_product,
                    Name: p.name,
                    Price: p.price,
                    State: p.status,
                    Shipping: false,
                    Favorite: false,
                    Date: p.date_of_visit,
                    Currency: p.currency,
                    Imgs: images,
                };
            });
            //console.log(finalHistory);
            res.send(finalHistory);
        });
    }
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let products = yield testDAL_1.TestDAL.GetAllProducts();
            let idsProducts = products.map(h => h.id_product);
            let imgs = yield testDAL_1.TestDAL.GetProductsImgs(idsProducts);
            let finalProducts = products.map(p => {
                let images = imgs.filter(i => i.id_product == p.id_product);
                return {
                    Id: p.id_product,
                    Name: p.name,
                    Price: p.price,
                    State: p.status,
                    Shipping: false,
                    Favorite: false,
                    Date: p.date_of_visit,
                    Currency: p.currency,
                    Imgs: images,
                    NewOrUsed: p.is_new,
                    OfficialStore: true,
                    Ubication: 'Montevideo',
                    Category: p.category,
                    Subcategory: p.subcategory
                };
            });
            res.send(finalProducts);
        });
    }
    uploadPublication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body.user;
            let publication = req.body.publication;
            console.log("User =>", user);
            console.log("Publication => ", publication);
            try {
                let userAuth = utils_1.Utils.validateUserForSell(user);
                console.log('userauth', userAuth);
                if (userAuth) {
                    let queryResult = yield testDAL_1.TestDAL.uploadPublication(publication, user.Id);
                }
                else {
                    throw 'Usuario no autorizado para vender';
                }
            }
            catch (error) {
                res.send(error);
            }
            res.send();
        });
    }
    uploadFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let images = req.body;
            console.log("Images => ", images);
            //let response = await TestDAL.InsertImg(images.Images[0]);
            let imgs = yield testDAL_1.TestDAL.GetImg();
            res.send(imgs);
            /*var form = new Formidable.IncomingForm();
    
            form.parse(req);
    
            form.on('fileBegin', function (name: any, file: any){
                file.path =  Config.filesPath + file.name;
                console.log("file --> ", file);
            });
    
            form.on('file', function (name: any, file: any){
                console.log('Uploaded ' + file.name);
                res.send(file.path);
            });*/
        });
    }
    changePass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            let idUser = req.body.Id;
            let url = "http://localhost:4200";
            yield utils_1.Utils.sendEmail(user, idUser, url);
            res.send();
        });
    }
    checkCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.body.user.Id;
            let code = req.body.code;
            try {
                let codeDb = yield utils_1.Utils.getCode(userId);
                console.log(codeDb);
                if (codeDb == code) {
                    utils_1.Utils.mailConfirm(userId);
                    res.send(true);
                }
                else {
                    throw 'wrong code';
                }
            }
            catch (error) {
                res.send(error);
            }
        });
    }
    testMultiQuery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield testDAL_1.TestDAL.Insert1();
            res.send('OK');
        });
    }
    Report(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let reportInfo = req.body;
            try {
                yield testDAL_1.TestDAL.Report(reportInfo);
            }
            catch (error) {
                res.send("Ya has denunciado esta publicación");
            }
            res.send();
        });
    }
    Buy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = req.body;
                let userInfo = yield testDAL_1.TestDAL.GetUserInfoById(data.IdBuyerUser);
                if (userInfo.status != 1) {
                    throw "Usuario no apto para comprar";
                }
                else {
                    yield testDAL_1.TestDAL.InsertBuy(data);
                }
            }
            catch (error) {
                res.send(error);
            }
            res.send();
        });
    }
    sendFile(req, res) {
        res.sendFile(path.join(__dirname, '../../../client/dist/web-app' + req.url));
    }
}
exports.indexController = new IndexController();
