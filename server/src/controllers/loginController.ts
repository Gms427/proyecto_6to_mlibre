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
        let email = req.body.Email;
        let pswd = req.body.Password;
        try {
            let exist = await SigninDAL.getUserByEmail(email);
                if(Bcrypt.compareSync(pswd, exist[0].password)){
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