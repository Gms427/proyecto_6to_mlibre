import PgClient from '../database';
import { QueryResult } from 'pg';
import { SigninDTO } from './DTOs/SigninDTO';
import { UserUpdate } from './DTOs/SigninDTO'

export class SigninDAL {

    static async Signin(data: SigninDTO): Promise<QueryResult>{
        let query = `INSERT INTO USERS(full_name, password, email, phone, status)
           VALUES ('${data.Fullname}','${data.Password}','${data.Email}', '${data.Phone}', '1');`;
    
        let result = await PgClient.query(query);
        return result;
    }

    static async getUserByEmail(email: string): Promise<QueryResult["rows"]>{
        console.log(email);
        let query = `SELECT * FROM USERS WHERE EMAIL = '${email}'`;
        let result = await PgClient.query(query);
        return result.rows;
    }

    static async UpateUser(data: UserUpdate): Promise<QueryResult>{
        let query = `UPDATE USERS SET 
        full_name  = '${data.FullName}',
        email = '${data.Email}',
        phone = '${data.Phone}',
        departament = '${data.Departament}',
        city = '${data.City}',
        street = '${data.Street}',
        neighborhood  = '${data.Neighborhood}',
        date_of_birth = '${data.DateOfBirth}'
        WHERE id_user ='${data.Id}';`;
        let result = await PgClient.query(query);
        return result;
    }
}