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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bcrypt = __importStar(require("bcrypt"));
const signinDAL_1 = require("../serverDAL/signinDAL");
const database_1 = __importDefault(require("../database"));
const models_1 = require("../models/models");
class Utils {
    static encriptPassword(pswd) {
        var salt = Bcrypt.genSaltSync(10);
        return Bcrypt.hashSync(pswd, salt);
    }
    static verifyEmailDisponibility(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let exist = yield signinDAL_1.SigninDAL.getUserByEmail(email);
            if (exist.length > 0) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    static getUnique(arr, prop) {
        const unique = arr
            .map(e => e[prop])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }
    static validateUserForSell(user) {
        if (user.Status && user.Status == 1) {
            return true;
        }
        else {
            return false;
        }
    }
    static InsertCode(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let code = Math.floor(Math.random() * 999999);
            let query = `INSERT INTO CODE_CONFIRM(id_user, code)
		VALUES ('${idUser}', '${code}');`;
            console.log('code query', query);
            let result = yield database_1.default.query(query);
            return result;
        });
    }
    static getCode(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT CODE FROM CODE_CONFIRM WHERE id_user = '${idUser}';`;
            let result = yield database_1.default.query(query);
            return result.rows[0].code;
        });
    }
    static mailConfirm(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `UPDATE USERS SET STATUS = 1  WHERE ID_USER ='${idUser}';
		DELETE FROM CODE_CONFIRM WHERE ID_USER = ${idUser}`;
            let result = yield database_1.default.query(query);
            return result;
        });
    }
    static sendEmail(user, idUser, url) {
        return __awaiter(this, void 0, void 0, function* () {
            var nodemailer = require('nodemailer');
            var code = yield this.getCode(idUser);
            console.log("codigo...", code);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'nosbeyTeam@gmail.com',
                    pass: 'anima2019'
                },
                secureConnection: 'false',
                tls: {
                    ciphers: 'SSLv3'
                }
            });
            var mailOptions = {
                from: 'nosbeyTeam@gmail.com',
                to: user.Email,
                subject: 'Confirmar',
                text: `Confirmar`,
                html: `<!DOCTYPE html>
			<html lang="en">
			
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
				<style>
					a {
						border: 0;
						background-color: #5294e2;
						color: white;
						border-radius: 20px;
						box-shadow: 3px 3px 5px 0 #0000001a;
						outline: none;
						cursor: pointer;
						padding: 20px;
						width: 100%;
						font-size: 20px;
						text-decoration: none;
					}
					
					.container {
						background-color: #FFC244;
						color: white;
						height: 500px;
						width: 500px;
						padding: 40px;
						text-align: center;
					}
					
					body {
						font-family: 'Roboto', sans-serif;
						font-weight: lighter;
						background-color: #5294e2
					}
					
					.title {
						font-size: 60px;
						padding: 20px;
					}
					
					.subtitle {
						font-size: 40px;
						padding: 0 20px;
						border-bottom: 2px solid white;
					}
					
					.confirm {
						font-size: 20px;
						padding: 20px;
					}
				</style>
			</head>
			
			<body>
				<div class="container">
					<p class="title">Tu codigo es</p>
					<p class="subtitle">${code}</p>
					<p class="confirm">Para confirmar presiona el boton</p>
					<a href="${url}">Confirmar</a>
				</div>
			</body>
			
			</html>
			`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
    }
    static createMessage(Content, Speaker) {
        return JSON.stringify(new models_1.Message(Content, Speaker));
    }
    static buildInsert(isCategory, fields, idPublication) {
        let table = fields[0].TableName;
        console.log(table);
        let columns = fields.map(f => f.ColumnName);
        console.log(columns);
        let values = fields.map(f => {
            if (f.Values != null && f.Values != undefined && f.Values.length > 0) {
                switch (typeof (f.Values)) {
                    case "string":
                        return `'${f.Values}'`;
                        break;
                    case "number":
                        return `'${f.Values}'`;
                        break;
                    case "boolean":
                        return f.Values;
                        break;
                    default:
                        return f.Values;
                        break;
                }
            }
            else {
                return 'null';
            }
        });
        let query = "";
        if (isCategory) {
            query = `INSERT INTO ${table} (id_category, id_product, ${columns})
			VALUES ('${fields[0].Category}', '${idPublication}', ${values})`;
        }
        else {
            query = `INSERT INTO ${table} (id_subcategory, id_product, ${columns})
			VALUES ('${fields[0].Subcategory}', '${idPublication}', ${values})`;
        }
        return query;
    }
    static buildSelect(fields, idPublication) {
        let table = fields[0].TableName;
        let fieldsNames = fields.map(f => {
            return f.ColumnName;
        });
        let query = `SELECT ${fieldsNames}
				FROM ${table}
				WHERE id_product = '${idPublication}'`;
        console.log('SELECT --> ', query);
        return query;
    }
}
exports.Utils = Utils;
class ErrorCodes {
}
ErrorCodes.EmailUsed = "0001";
exports.ErrorCodes = ErrorCodes;
exports.publications = [
    {
        Id: 1,
        Name: "Chevrolet Celta 1.0 full",
        Price: "U$S 7.450",
        State: true,
        Shipping: true,
        Favorite: false,
        Img: "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    },
    {
        Id: 2,
        Name: "Chevrolet Celta 1.0 full",
        Price: "U$S 7.450",
        State: false,
        Shipping: false,
        Favorite: false,
        Img: "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-128-gb-refurbished-macrotec-D_NP_929296-MLU29526633106_022019-X.webp"
    },
    {
        Id: 3,
        Name: "Chevrolet Celta 1.0 full",
        Price: "U$S 7.450",
        State: false,
        Shipping: true,
        Favorite: false,
        Img: "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    }
];
