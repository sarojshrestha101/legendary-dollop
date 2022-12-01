import dotenv from 'dotenv';
dotenv.config();

import { l } from './utils/logger';

const port = process.env.PORT ?? 8000;

const aedes = require('aedes')();
const server = require('aedes-server-factory').createServer(aedes, {
    trustProxy: true
});

server.listen(port, function () {
    l.info('Server up and running on port %s', port);
});
