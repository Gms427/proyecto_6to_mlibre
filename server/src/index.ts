import express , { Application } from 'express';
import indexRoutes  from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import * as WebSocket from 'ws';
import * as http from 'http';
import { Message, Speaker } from './models/models';
import { Utils } from './utils/utils';

class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); // reemplaza a bodyParser, ahora está incluido en Express, mete los datos enviados por post en el req.body
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, '../../client/web-app/dist/web-app')));
    }

    routes(): void {
        this.app.use("/", indexRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on port: '+ this.app.get('port'));
        });
        const server = http.createServer(this.app);
        let wss = new WebSocket.Server({ server });

        wss.on('connection', (ws: WebSocket) => {

            console.log('Connection to websocket');
            
            setTimeout(() => {
                ws.send(Utils.createMessage("Hola, ¿En qué podemos ayudarte?", Speaker.ADMIN));
            }, 1500);
            

            ws.on('message', (msg: string) => {

                const message = JSON.parse(msg) as Message;
                console.log('New Message: '+ message.Content);

                setTimeout(() => {
                    /*wss.clients.forEach(client => {
                        if(client != ws){
                            client.send(JSON.stringify(msg));
                        }
                    });*/
                    ws.send(Utils.createMessage("Respuesta de prueba", Speaker.ADMIN));

                }, 2000);

            });

        });

        server.listen(8999, () => {
            console.log('WebSocket server is listening on '+ 8999);
        });
    }
}

const server = new Server();
server.start();