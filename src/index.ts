import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT ?? 8000;
import { l } from './utils/logger';

const aedes = require('aedes')();
const server = require('aedes-server-factory').createServer(aedes, {
    ws: true
});

server.listen(port, function () {
    l.info('Server started on port %s', port);
});
