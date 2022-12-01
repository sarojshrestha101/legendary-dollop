import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'net';
import { l } from './utils/logger';

const aedes = require('aedes')();
const server = createServer(aedes.handle);

const port = process.env.PORT ?? 8000;
server.listen(port, () => {
    l.info('Server up and running on port %s', port);
});
