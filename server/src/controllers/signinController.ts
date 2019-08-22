import { Request, Response } from 'express';
import { SigninDTO, UserUpdate } from '../serverDAL/DTOs/SigninDTO';
import { SigninDAL } from '../serverDAL/signinDAL';
import { Utils, ErrorCodes } from '../utils/utils';

class SigninController {
    async signin(req: Request, res: Response){
        let user: SigninDTO = req.body;
        try {
            let exist = await SigninDAL.getUserByEmail(user.Email);
            if(exist.length > 0){
                throw `The email ${user.Email} is alredy in use`;
            }else{
                user.Password = Utils.encriptPassword(user.Password);
                // TODO: validaciones que se hacen del lado del cliente
                SigninDAL.Signin(user);
                console.log('Se registro');
                // let userSenCode = await SigninDAL.getUserByEmail(user.Email)
                // console.log('trae usuario ' + userSenCode);
                Utils.sendCode(user);
                console.log('envia el codigo');
                Utils.sendEmail(user);
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