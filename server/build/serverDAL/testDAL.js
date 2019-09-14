"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const utils_1 = require("../utils/utils");
class TestDAL {
    static TestQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            const table = "users";
            const condition = "1 = 1";
            let query = `SELECT * FROM ${table}
                    WHERE ${condition}`;
            let result = yield database_1.default.query(query);
            return result;
        });
    }
    static GetFiltersInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select
                        fl.id_filter,
                        fl.is_generic,
                        fl.filter_name,
                        fl.filter_type,
                        fl.column_name,
                        fl.table_name,
                        flop.option_value
                    from filter fl full join filter_option flop
                        on fl.id_filter = flop.id_filter
                    where fl.is_generic = 1 and fl.id_filter <> 4 
                    order by fl.id_filter;`;
            console.log(query);
            let result = yield database_1.default.query(query);
            return result;
        });
    }
    static GetCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select 
                        cat.id_category as IdCategory,
                        cat.name as CategoryName,
                        cat.icon as Icon,
                        scat.name as SubcategoryName,
                        scat.id_subcategory as IdSubcategory
                    from category cat inner join subcategory scat
                        on cat.id_category = scat.id_category
                    where cat.id_category in (1,2,3,4)
                    order by cat.id_category;`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetSubcategoryFields(idSubcategory, idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select	fl.id_filter,
                            fl.is_generic,
                            fl.filter_name,
                            fl.filter_type,
                            fl.id_category,
                            fl.id_subcategory,
                            fl.table_name,
                            fl.column_name
                    from filter fl
                    where (fl.id_subcategory = '${idSubcategory}'
                    or fl.id_category = '${idCategory}')
                    and fl.id_filter not in (1,3,4)
                    order by fl.filter_name`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetFilterValues(idsFilters) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select
                        fl.id_filter,
                        fl.is_generic,
                        fl.filter_name,
                        fl.filter_type,
                        flop.option_value
                    from filter fl inner join filter_option flop
                        on fl.id_filter = flop.id_filter
                    where fl.id_filter in (${idsFilters})
                    order by flop.option_value;`;
            console.log(query);
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetUserInfo(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select * from users where email = '${userEmail}'`;
            let result = yield database_1.default.query(query);
            return result.rows[0];
        });
    }
    static GetUserInfoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select * from users where id_user = '${id}'`;
            let result = yield database_1.default.query(query);
            return result.rows[0];
        });
    }
    static GetProducts(searchValue) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM product WHERE name ~* '${searchValue}';`;
            console.log(query);
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetProductsImgs(idsProducts) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM product_img WHERE id_product in (${idsProducts})`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetUserHistory(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select 	pr.id_product,
                            pr.id_user,
                            pr.price,
                            pr.currency,
                            pr.description,
                            pr.category,
                            pr.subcategory,
                            pr.name,
                            pr.stock,
                            pr.warranty,
                            pr.status,
                            his.date_of_visit
                    from product pr
                    inner join history his
                        on pr.id_product = his.id_product
                    inner join users us
                        on pr.id_user = us.id_user
                    where us.email = '${email}';`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `select * from product where status = 1;`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static uploadPublication(publication, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            //try {
            let query = `INSERT INTO PRODUCT (
                ID_USER, 
                PRICE, 
                CURRENCY, 
                DESCRIPTION, 
                CATEGORY, 
                SUBCATEGORY,
                NAME, 
                STOCK,
                STATUS,
                DATE_OF_CREATION,
                IS_NEW
                ) VALUES(
                '${userId}',
                '${publication.Price}',
                '${publication.Currency}',
                '${publication.Description}',
                '${publication.Category}',
                '${publication.Subcategory}',
                '${publication.Name}',
                '${publication.Stock}',
                '${publication.State}',
                '${publication.DateOfCreation}',
                '${publication.NewOrUsed}'
                ) RETURNING id_product`;
            console.log('query', query);
            let result = yield database_1.default.query(query);
            let idNewPublication = result.rows[0].id_product;
            console.log("Id New publication =>", idNewPublication);
            yield this.InsertPublicationSpecificData(idNewPublication, publication.Fields);
            yield this.InsertImgs(publication.Imgs, idNewPublication);
        });
    }
    static InsertImgs(imgs, idPublication) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = imgs.map(img => {
                return `(${idPublication}, '${img}')`;
            });
            let query = `INSERT INTO product_img(id_product, image) VALUES ${values};`;
            console.log("Executing insert imgs... =>", query);
            let result = yield database_1.default.query(query);
            console.log('insert imgs Executed.');
        });
    }
    static InsertPublicationSpecificData(idPublication, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            let catFields = [];
            let subCatFields = [];
            fields.forEach((f) => {
                if (f.Category) {
                    catFields.push(f);
                }
                else {
                    subCatFields.push(f);
                }
            });
            let insertForCategoryFields = utils_1.Utils.buildInsert(true, catFields, idPublication);
            let insertForSubcategoryFields = utils_1.Utils.buildInsert(false, subCatFields, idPublication);
            console.log('Executing insertForCategoryFields... =>', insertForCategoryFields);
            yield database_1.default.query(insertForCategoryFields);
            console.log('insertForCategoryFields Executed.');
            console.log('Executing insertForSubcategoryFields... =>', insertForSubcategoryFields);
            yield database_1.default.query(insertForSubcategoryFields);
            console.log('insertForSubcategoryFields Executed.');
        });
    }
    static GetProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM product WHERE id_product = '${id}';`;
            let result = yield database_1.default.query(query);
            return result.rows[0];
        });
    }
    static GetFields(category, subcategory, idPublication) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(category, subcategory);
            let query = `SELECT * FROM filter 
                    WHERE id_subcategory = '${subcategory}' or
                    id_category = '${category}';`;
            console.log(query);
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetFieldsValues(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static GetImg() {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM test2;`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static Report(reportInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO publication_report(id_product, description, id_user)
                    values(${reportInfo.IdPublication}, '${reportInfo.Description}', ${reportInfo.IdUser});`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static InsertBuy(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO sell (id_seller_user, id_buyer_user, id_product, sell_date)
        values('${data.IdSellerUser}', '${data.IdBuyerUser}', '${data.IdProduct}', '${data.SellDate}')`;
            let result = yield database_1.default.query(query);
            return result;
        });
    }
    static Insert1() {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`insert into test_img2(img_data) values('insert1')`);
            yield this.Insert2();
            yield this.Insert3();
            return;
        });
    }
    static Insert2() {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`insert into test_img2(img_data) values('insert2')`);
            yield database_1.default.query(`insert into test_img2(img_data) values('insert2.2')`);
            return;
        });
    }
    static Insert3() {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`insert into test_img2(img_data) values('insert3')`);
            return;
        });
    }
}
exports.TestDAL = TestDAL;
