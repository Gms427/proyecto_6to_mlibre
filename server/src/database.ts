import * as Postgres from 'pg';

const dbData = {
    user: "postgres",
    password: "root",
    url: "localhost:5432",
    dbName: "agencia_db"
}
const connectionString = `postgressql://${dbData.user}:${dbData.password}@${dbData.url}/${dbData.dbName}`;

const client: Postgres.Client = new Postgres.Client({
    connectionString: connectionString
});

client.connect();

export default client; 