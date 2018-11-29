import winston from 'winston'
import { config } from '../../configs'

require('winston-daily-rotate-file')

const rootPath = config.approot.replace('server', '')
const transport = new winston.transports.DailyRotateFile({
  filename: rootPath + '/logs/%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  prepend: true,
  level: process.env.ENV === 'development' ? 'debug' : 'info'
})

export const winstonLogger = winston.createLogger({
  transports: [transport]
})
