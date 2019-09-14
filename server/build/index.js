"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const WebSocket = __importStar(require("ws"));
const http = __importStar(require("http"));
const models_1 = require("./models/models");
const utils_1 = require("./utils/utils");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json({ limit: 10000000 })); // reemplaza a bodyParser, ahora está incluido en Express, mete los datos enviados por post en el req.body
        this.app.use(express_1.default.urlencoded({ extended: false, limit: 10000000 }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/web-app/dist/web-app')));
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on port: ' + this.app.get('port'));
        });
        const server = http.createServer(this.app);
        let wss = new WebSocket.Server({ server });
        wss.on('connection', (ws, request, client) => {
            console.log('Connection to websocket');
            setTimeout(() => {
                ws.send(utils_1.Utils.createMessage("Hola, ¿En qué podemos ayudarte?", models_1.Speaker.ADMIN));
            }, 1500);
            ws.on('message', (msg) => {
                const message = JSON.parse(msg);
                console.log(`New message: ${message.Content}`);
                setTimeout(() => {
                    let parsedMsg = JSON.parse(msg);
                    if (parsedMsg.Speaker === models_1.Speaker.ADMIN) {
                        wss.clients.forEach(client => {
                            client.send(utils_1.Utils.createMessage(parsedMsg.Content, parsedMsg.Speaker));
                        });
                    }
                    else {
                        wss.clients.forEach(client => {
                            if (client != ws) {
                                client.send(utils_1.Utils.createMessage(parsedMsg.Content, parsedMsg.Speaker));
                            }
                        });
                    }
                    //ws.send(Utils.createMessage("Respuesta de prueba", Speaker.ADMIN));
                }, 2000);
            });
        });
        server.listen(8999, () => {
            console.log('WebSocket server is listening on ' + 8999);
        });
    }
}
const server = new Server();
server.start();
