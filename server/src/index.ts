import express , { Application } from 'express';
import indexRoutes  from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

class Server {
    public app: Application

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
    }
}

const server = new Server();
server.start();