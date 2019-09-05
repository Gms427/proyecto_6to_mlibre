import { Request, Response } from 'express';
import path from 'path';
import { TestDAL } from '../serverDAL/testDAL'
import { QueryResult } from 'pg';
import { Utils } from '../utils/utils';
import * as Bcrypt from 'bcrypt';
import { SigninDAL } from '../serverDAL/signinDAL';

class LoginController {
    
    async login(req: Request, res: Response){
        let email = req.body.Email;
        let pswd = req.body.Password;
        try {
            let exist = await SigninDAL.getUserByEmail(email);
            if(exist.length > 0){
                if(Bcrypt.compareSync(pswd, exist[0].password)){
                    res.send(true);
                }else{
                    throw 'La contraseña es incorrecta';
                }
                
            }else{
                throw 'El E-mail no está registrado';
            }
        } catch (error) {
            res.send(error);
        }
    }

    async checkPassword(req: Request, res: Response){
        let userId = req.body.user.Id;
        let user = req.body.user
        let pswd = req.body.pass;
        let url = 'http://localhost:4200'
        console.log(req.body);
        try {
            let exist = await SigninDAL.getUserByEmail(req.body.user.Email);
                if(Bcrypt.compareSync(pswd, exist[0].password)){
                    await Utils.InsertCode(userId);
                    Utils.sendEmail(user, userId, url);
                    res.send(true);
                }else{
                    throw 'Password is incorrect';
                }
        } catch (error) {
            res.send(error);
        }
    }
    
}

export const loginController = new LoginController();