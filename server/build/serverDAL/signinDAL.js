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
class SigninDAL {
    static Signin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO USERS(full_name, password, email, phone, status)
           VALUES ('${data.Fullname}','${data.Password}','${data.Email}', '${data.Phone}', '3')
           RETURNING ID_USER;`;
            let result = yield database_1.default.query(query);
            return result.rows[0].id_user;
        });
    }
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM USERS WHERE EMAIL = '${email}'`;
            let result = yield database_1.default.query(query);
            return result.rows;
        });
    }
    static UpateUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataValue;
            if (data.DateOfBirth == null) {
                dataValue = null;
            }
            else {
                dataValue = `'${data.DateOfBirth}'`;
            }
            let query = `UPDATE USERS SET 
        full_name  = '${data.FullName}',
        email = '${data.Email}',
        phone = '${data.Phone}',
        departament = '${data.Departament}',
        city = '${data.City}',
        street = '${data.Street}',
        neighborhood  = '${data.Neighborhood}',
        date_of_birth = ${dataValue}
        WHERE id_user ='${data.Id}';`;
            let result = yield database_1.default.query(query);
            return result;
        });
    }
}
exports.SigninDAL = SigninDAL;
