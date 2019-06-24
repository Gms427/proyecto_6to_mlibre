import client from '../database';

export function TestQuery(){
    const table = "cliente";
    const condition = "1 = 1"
    let query = `SELECT * FROM ${table}
                WHERE ${condition}`;
    let ret: any;
    client.query(query, (err: any, response: any) => {
        console.log(err, response);
        ret =  response;
    });
    return ret;
}