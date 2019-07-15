import PgClient from '../database';
import { QueryResult } from 'pg';
import { SigninDTO } from './DTOs/SigninDTO';

export class SigninDAL {

    static async Signin(data: SigninDTO): Promise<QueryResult>{
        let query = `INSERT INTO USERS(name, password, email)
           VALUES ('${data.Name}','${data.Password}','${data.Email}');`;
    
        let result = await PgClient.query(query);
        return result;
    }

    static async getUserByEmail(email: string): Promise<QueryResult["rows"]>{
        console.log(email);
        let query = `SELECT * FROM USERS WHERE EMAIL = '${email}'`;
        let result = await PgClient.query(query);
        return result.rows;
    }
}