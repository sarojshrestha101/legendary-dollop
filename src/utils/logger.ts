import pino from 'pino';
import type { Logger } from 'pino';

const name = 'ld';
const level = process.env?.PINO_LOG_LEVEL ?? 'info';

export const l: Logger = pino({
    name,
    level
});
