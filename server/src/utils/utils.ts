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

	static async getCode(idUser: number): Promise<number> {
		let query = `SELECT CODE FROM CODE_CONFIRM WHERE id_user = '${idUser}';`;
		let result = await PgClient.query(query);
		return result.rows[0].code;
	}

	static async mailConfirm(idUser: number): Promise<QueryResult>{
		let query = `UPDATE USERS SET STATUS = 1  WHERE ID_USER ='${idUser}';
		DELETE FROM CODE_CONFIRM WHERE ID_USER = ${idUser}`
		let result = await PgClient.query(query);
		return result;
	}

	public static async sendEmail(user: SigninDTO, idUser: number, url: String) {
		var nodemailer = require('nodemailer');
		var code = await this.getCode(idUser);
		console.log("codigo...", code);

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'nosbeyTeam@gmail.com',
				pass: 'N0sb3yT3am'
			},
			secureConnection: 'false',
			tls: {
				ciphers: 'SSLv3'
			}
		});

		var mailOptions = {
			from: 'nosbeyTeam@gmail.com',
			to: user.Email,
			subject: 'Confirmar',
			text: `Confirmar`,
			html: `<!DOCTYPE html>
			<html lang="en">
			
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
				<style>
					a {
						border: 0;
						background-color: #5294e2;
						color: white;
						border-radius: 20px;
						box-shadow: 3px 3px 5px 0 #0000001a;
						outline: none;
						cursor: pointer;
						padding: 20px;
						width: 100%;
						font-size: 20px;
						text-decoration: none;
					}
					
					.container {
						background-color: #FFC244;
						color: white;
						height: 500px;
						width: 500px;
						padding: 40px;
						text-align: center;
					}
					
					body {
						font-family: 'Roboto', sans-serif;
						font-weight: lighter;
						background-color: #5294e2
					}
					
					.title {
						font-size: 60px;
						padding: 20px;
					}
					
					.subtitle {
						font-size: 40px;
						padding: 0 20px;
						border-bottom: 2px solid white;
					}
					
					.confirm {
						font-size: 20px;
						padding: 20px;
					}
				</style>
			</head>
			
			<body>
				<div class="container">
					<p class="title">Tu codigo es</p>
					<p class="subtitle">${code}</p>
					<p class="confirm">Para confirmar presiona el boton</p>
					<a href="${url}">Confirmar</a>
				</div>
			</body>
			
			</html>
			`
		};
		transporter.sendMail(mailOptions, function (error: any, info: any) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
	}

	public static createMessage(Content: string, Speaker: Speaker): string{
		return JSON.stringify(new Message(Content, Speaker));
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