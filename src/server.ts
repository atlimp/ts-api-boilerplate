import App from './app';
import BaseRouter from './routers/baserouter';
import { getConfigOrDefault } from './util/util';

const host: string = getConfigOrDefault('HOST', 'localhost');
const port: number = getConfigOrDefault('process.env.PORT', 3000, (x: string) => Number(x));


const app = new App({
    host,
    port,
    routers: [
        new BaseRouter(),
    ],
});

app.listen();
