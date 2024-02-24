const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `[${level}]: ${message} {timestamp: ${timestamp}}`;
});

const logger = createLogger({
    level: 'debug',
    format: combine(
        format.colorize(),
        timestamp(),
        logFormat
    ),
    transports: [new transports.Console()],
});

const infoLogger = createLogger({
    level: 'info',
    format: combine(
        format.colorize(),
        timestamp(),
        logFormat
    ),
    transports: [new transports.Console()],
});

const errorLogger = createLogger({
    level: 'error',
    format: combine(
        format.colorize(),
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'error.log'})
    ],
});


module.exports = {
    Logger: logger,
    ErrorLogger: errorLogger,
    InfoLogger: infoLogger
}