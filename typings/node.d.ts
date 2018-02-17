declare namespace NodeJS {
  interface ProcessEnv {
    IS_WEBPACK_STATS_ENABLED: string;
    IS_REDUX_LOGGING_MIDDLEWARE_ENABLED: string;

    SENTRY_DSN_SERVER: string;
    IS_SENTRY_SERVER_ENABLED: string;
    NODE_ENV: string;
    HOST: string;
    PORT: string;
  }
}
