"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Postgres = __importStar(require("pg"));
const dbData = {
    user: "postgres",
    password: "root",
    url: "localhost:5432",
    dbName: "test"
};
const connectionString = `postgressql://${dbData.user}:${dbData.password}@${dbData.url}/${dbData.dbName}`;
const PgClient = new Postgres.Client({
    connectionString: connectionString
});
PgClient.connect();
exports.default = PgClient;
