"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const signinDAL_1 = require("../serverDAL/signinDAL");
const utils_1 = require("../utils/utils");
class SigninController {
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            let url = "http://localhost:4200";
            try {
                let exist = yield signinDAL_1.SigninDAL.getUserByEmail(user.Email);
                if (exist.length > 0) {
                    throw `The email ${user.Email} is alredy in use`;
                }
                else {
                    user.Password = utils_1.Utils.encriptPassword(user.Password);
                    // TODO: validaciones que se hacen del lado del cliente
                    let idNewUser = yield signinDAL_1.SigninDAL.Signin(user);
                    console.log(idNewUser);
                    utils_1.Utils.InsertCode(idNewUser);
                    utils_1.Utils.sendEmail(user, idNewUser, url);
                    console.log('envia el mail');
                }
            }
            catch (error) {
                res.send(error);
            }
            res.end();
        });
    }
    t(req, res) {
        res.end();
    }
    verifyEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let exist = yield utils_1.Utils.verifyEmailDisponibility(req.params.email);
            res.send(exist);
        });
    }
    UpdateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            try {
                signinDAL_1.SigninDAL.UpateUser(user);
            }
            catch (error) {
                res.send(error);
            }
            res.end();
        });
    }
}
exports.signinController = new SigninController();
