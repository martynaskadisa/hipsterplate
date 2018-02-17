import axios from 'axios';
import { Middleware } from 'client/utils/redux';
import thunk from 'redux-thunk';
import crash from './crash';
import logging from './logging';

const request = axios.create({
  baseURL: '/api/v1/'
});

const middleware: Middleware[] = [thunk.withExtraArgument(request), crash];

if (__IS_REDUX_LOGGING_MIDDLEWARE_ENABLED__) {
  middleware.push(logging);
}

export default middleware;
