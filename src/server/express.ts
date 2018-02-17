import * as Express from 'express';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import * as path from 'path';
import * as Raven from 'raven';
import apiApp from './api';
import frontendApp from './frontend';
import { isProd, ROOT_PATH } from './utils';

const app = Express();

if (isProd && JSON.parse(process.env.IS_SENTRY_SERVER_ENABLED)) {
  Raven.config(process.env.SENTRY_DSN_SERVER).install();
  app.use(Raven.requestHandler());
}

if (!isProd) {
  app.use(logger('dev'));
}

app.use(helmet());

/**
 * Allow hot reloading for API
 */
if (!isProd) {
  app.use('/api', (req, res, next) => require('./api').default(req, res, next));
} else {
  app.use('/api', apiApp);
}

app.use('/', frontendApp);

if (isProd && JSON.parse(process.env.IS_SENTRY_SERVER_ENABLED)) {
  app.use(Raven.errorHandler());
}

export default app;
