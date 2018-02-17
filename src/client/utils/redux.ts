import { IStore } from 'client/store/state';
import { Dispatch, MiddlewareAPI, Store } from 'redux';
import { Action } from 'redux-actions';

export type Middleware = (
  store: MiddlewareAPI<IStore>
) => (next: Dispatch<IStore>) => (action: Action) => Action;
