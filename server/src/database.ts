import * as Postgres from 'pg';

const dbData = {
    user: "postgres",
    password: "root",
    url: "localhost:5432",
    dbName: "test"
}
const connectionString = `postgressql://${dbData.user}:${dbData.password}@${dbData.url}/${dbData.dbName}`;

const PgClient: Postgres.Client = new Postgres.Client({
    connectionString: connectionString
});

PgClient.connect();

export default PgClient; 