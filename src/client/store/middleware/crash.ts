import { Middleware } from 'client/utils/redux';
import { captureException } from 'raven-js';

const crashReporting: Middleware = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    });

    throw err;
  }
};

export default crashReporting;
