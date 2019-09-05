import { Request, Response } from 'express';
import { SigninDTO, UserUpdate } from '../serverDAL/DTOs/SigninDTO';
import { SigninDAL } from '../serverDAL/signinDAL';
import { Utils, ErrorCodes } from '../utils/utils';
import { exists } from 'fs';

class SigninController {
    async signin(req: Request, res: Response){
        let user: SigninDTO = req.body;
        let url = "http://localhost:4200"
        try {
            let exist: any = await SigninDAL.getUserByEmail(user.Email);
            if(exist.length > 0){
                throw `The email ${user.Email} is alredy in use`;
            }else{
                user.Password = Utils.encriptPassword(user.Password);
                // TODO: validaciones que se hacen del lado del cliente
                let idNewUser = await SigninDAL.Signin(user);
                console.log(idNewUser);
                Utils.InsertCode(idNewUser);
                Utils.sendEmail(user, idNewUser, url);
                console.log('envia el mail');
            }
        } catch (error) {
            res.send(error);
        }
        
        res.end();
    }
    t(req: Request, res: Response){
        res.end();
    }

    async verifyEmail(req: Request, res: Response){
        let exist = await Utils.verifyEmailDisponibility(req.params.email);
        res.send(exist);
    }

    async UpdateUser(req: Request, res: Response){
        let user: UserUpdate = req.body;
        try {
            SigninDAL.UpateUser(user);
        } catch (error) {
            res.send(error);
        }
        res.end();
    }
}

export const signinController = new SigninController();