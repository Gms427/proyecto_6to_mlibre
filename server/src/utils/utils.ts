import * as Bcrypt from 'bcrypt';
import { SigninDAL } from '../serverDAL/signinDAL';
import { UserUpdate, SigninDTO } from '../serverDAL/DTOs/SigninDTO';
import PgClient from '../database';
import { QueryResult } from 'pg';
import { StringifyOptions } from 'querystring';
import { Speaker, Message } from '../models/models';

export class Utils {
	public static encriptPassword(pswd: string): string {
		var salt = Bcrypt.genSaltSync(10);
		return Bcrypt.hashSync(pswd, salt);
	}

	public static async verifyEmailDisponibility(email: string): Promise<boolean> {
		let exist = await SigninDAL.getUserByEmail(email);
		if (exist.length > 0) {
			return false;
		} else {
			return true;
		}
	}

	public static getUnique(arr: any[], prop: string): any[] {
		const unique = arr
			.map(e => e[prop])
			.map((e, i, final): any => final.indexOf(e) === i && i)
			.filter(e => arr[e]).map<boolean>(e => arr[e]);

		return unique;
	}

	public static validateUserForSell(user: UserUpdate): boolean {
		if (user.Status && user.Status == 1) {
			return true;
		} else {
			return false;
		}
	}

	static async InsertCode(idUser: any): Promise<QueryResult> {
		let code = Math.floor(Math.random() * 999999);
		
		let query = `INSERT INTO CODE_CONFIRM(id_user, code)
		VALUES ('${idUser}', '${code}');`;
		console.log('code query', query);
		let result = await PgClient.query(query);
		return result;
	}

}

export class ErrorCodes {
	public static EmailUsed: string = "0001";
}

export const publications = [
	{
		Id: 1,
		Name: "Chevrolet Celta 1.0 full",
		Price: "U$S 7.450",
		State: true,
		Shipping: true,
		Favorite: false,
		Img:
			"https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
	},
	{
		Id: 2,
		Name: "Chevrolet Celta 1.0 full",
		Price: "U$S 7.450",
		State: false,
		Shipping: false,
		Favorite: false,
		Img:
			"https://mlstaticquic-a.akamaihd.net/iphone-7-plus-128-gb-refurbished-macrotec-D_NP_929296-MLU29526633106_022019-X.webp"
	},
	{
		Id: 3,
		Name: "Chevrolet Celta 1.0 full",
		Price: "U$S 7.450",
		State: false,
		Shipping: true,
		Favorite: false,
		Img:
			"https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
	}
];