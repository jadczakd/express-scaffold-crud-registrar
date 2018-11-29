// Express Modules
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import express from 'express';
import morgan from 'morgan';
// other modules
import mongoose from 'mongoose';
// App configs
import { config } from './configs';
import routes from './src/routes';
import { winstonLogger } from './src/utils/logger';
import { db } from './src/utils/db';
import path from 'path';

const mongooseConnection = mongoose.connection;
const app = express();

const port = process.env.PORT || config.envPort;

app.enable('trust proxy');

// Express midlewares
app.use(compression());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json({ limit: '1mb' }));
app.use(cookieParser(config.cookieSecret));

if (
  !process.env.NODE_ENV ||
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'local'
) {
  // only use it in development
  app.use(errorhandler());
}
// allow cross domain requests ONLY for specific origin. TODO: update whenever this is going live
app.use((req, res, next) => {
  const origin = req.headers.origin;
  //if (origin != undefined) {
  //if (origin.match(/localhost/) || origin.match(/0.0.0.1/)) {
  res.header('Access-Control-Allow-Origin', origin);
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE, OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With, *'
  );
  //}
  //}

  next();
});

// register ejs admin routes
app.set('view engine', 'ejs')

app.get('/admin', function (req, res) {
  res.redirect('public/index.html')
})
app.use('/public', express.static(path.join(__dirname, '/views')))

// feed the routes to the app
routes(app);

/**
 * Logging Middlewares
 */
app.use(morgan('dev', {}));

process.on('uncaughtException', (reason, p) => {
  winstonLogger.error(
    '[EXCEPTION ] Uncaught Exception at: ' +
    p +
    ' reason: ' +
    reason
  );
});

process.on('SIGTERM', () => {
  winstonLogger.info('Terminating');
  process.exit(0);
});

process.on('SIGINT', () => {
  winstonLogger.info('Terminating');
  mongooseConnection.close(() => {
    winstonLogger.info('Mongoose default connection disconnected through programmatic exit');
    process.exit(0);
  });
});

process.on('unhandledRejection', (reason, p) => {
  winstonLogger.error(
    '[EXCEPTION ] Unhandled Rejection at:',
    p,
    'reason:',
    reason
  );
});

process.on('exit', () => {
  mongooseConnection.close(() => {
    winstonLogger.info('Mongoose default connection disconnected through programmatic exit');
  });
});

db.connect(() => {
  app.listen(port, () => {
    console.log('[STATUS: OK] Listening on ' + port);
    winstonLogger.info('[STATUS: OK] Listening on ' + port);
  });
});

app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})
export default app;
