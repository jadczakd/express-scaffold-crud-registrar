import mongoose from 'mongoose'
import { winstonLogger } from '../utils/logger'
import { config } from '../../configs'

const dbURI = config.database
const mongooseConnection = mongoose.connection
const db = {}

db.connect = done => {
  return mongoose.connect(
    dbURI, { useNewUrlParser: true, autoIndex: config.autoIndex },
    d => {
      if (done) {
        console.log('Database connected to ' + dbURI)
        winstonLogger.info('Database connected to ' + dbURI)
        process.nextTick(done())
      }
    },
    e => {
      winstonLogger.error('Mongoose default connection error: ' + e)
    }
  )
}

mongooseConnection.on('disconnected', () => {
  winstonLogger.info('Mongoose default connection disconnected')
})

export { db }
