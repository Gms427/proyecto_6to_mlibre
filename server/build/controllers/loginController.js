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
const utils_1 = require("../utils/utils");
const Bcrypt = __importStar(require("bcrypt"));
const signinDAL_1 = require("../serverDAL/signinDAL");
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let email = req.body.Email;
            let pswd = req.body.Password;
            try {
                let exist = yield signinDAL_1.SigninDAL.getUserByEmail(email);
                if (exist.length > 0) {
                    if (Bcrypt.compareSync(pswd, exist[0].password)) {
                        res.send(true);
                    }
                    else {
                        throw 'La contraseña es incorrecta';
                    }
                }
                else {
                    throw 'El E-mail no está registrado';
                }
            }
            catch (error) {
                res.send(error);
            }
        });
    }
    checkPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.body.user.Id;
            let user = req.body.user;
            let pswd = req.body.pass;
            let url = 'http://localhost:4200';
            console.log(req.body);
            try {
                let exist = yield signinDAL_1.SigninDAL.getUserByEmail(req.body.user.Email);
                if (Bcrypt.compareSync(pswd, exist[0].password)) {
                    yield utils_1.Utils.InsertCode(userId);
                    utils_1.Utils.sendEmail(user, userId, url);
                    res.send(true);
                }
                else {
                    throw 'Password is incorrect';
                }
            }
            catch (error) {
                res.send(error);
            }
        });
    }
}
exports.loginController = new LoginController();
