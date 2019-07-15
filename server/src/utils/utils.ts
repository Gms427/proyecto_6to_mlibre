import * as Bcrypt from 'bcrypt';
import { SigninDAL } from '../serverDAL/signinDAL';

export class Utils {
    public static encriptPassword(pswd: string): string{
        var salt = Bcrypt.genSaltSync(10);
        return Bcrypt.hashSync(pswd, salt);
    }

    public static async verifyEmailDisponibility(email: string): Promise<boolean>{
        let exist = await SigninDAL.getUserByEmail(email);
        if(exist.length > 0){
            return false;
        }else{
            return true;
        }
    }

    public static getUnique(arr: [], prop: string) {
        const unique = arr
          .map(e => e[prop])
          .map((e, i, final): any => final.indexOf(e) === i && i)
          .filter(e => arr[e]).map<boolean>(e => arr[e]);
      
          return unique;
    }
}

export class ErrorCodes{
    public static EmailUsed: string =  "0001";
}